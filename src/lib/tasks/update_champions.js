import fs from "fs";
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../data/champions.json');
import { centiToDisplay, decodeMbldResult } from "../helpers.js";

async function run(year){
  console.info("Updating champions for", year);

  const compIds = ["NewZealandNationals"]

  // get championship ID's for the given year. Array because FMC only comps.
  const championshipsThisYear = (await fetchUnnoficialAPI(`championships/NZ`)).items
    .filter(c => c.id.endsWith(year))
    .map(c => c.id);
  
  // Making an assumption that the national champion is in the top 10 places to filter more out
  const champions = {};
  for(const id of championshipsThisYear){
    let candidates = (await fetchUnnoficialAPI(`results/${id}`)).items
    .filter(r => r.round === "Final" && r.position <= 10)
    .reduce((acc, cur) => {
      if(!acc[cur.eventId]){ acc[cur.eventId] = []; }
      acc[cur.eventId].push(cur);
      return acc;
    }, {});
    for(const [eventId, eventCandidates] of Object.entries(candidates)){
      champions[eventId] = [];
      // go through array of eventCandidates until one person is from NZ, then they are the champion.
      // in case of ties, keep going afterward until the result is worse
      for(const c of eventCandidates){
        const sortKey = c.eventId.endsWith("bf") ? "best" : "average";
        const isWorse = champions[eventId][0]?.[sortKey] < c[sortKey] || champions[eventId][0]?.best < c.best || false;

        // check if DNF, DNS, which would mean no champion for this event, or if was worse
        if(c.best <= 0 || isWorse){ break; }

        // fetch them from Unnoficial WCA API to see if their country is NZ
        const p = (await fetchUnnoficialAPI(`persons/${c.personId}`));
        c.name = p.name;
        c.result = c.eventId === "333mbf" ? decodeMbldResult(c.best) : centiToDisplay(c[sortKey]);
        const bracketer = {
          best: Math.min(...c.solves.filter(a => a > 0)) || -1,
          worst: c.solves.filter(a => a <= 0).length ? -1 : Math.max(...c.solves),
          bestFound: false,
          worstFound: false
        }
        // some terrible code
        c.detail = c.solves.map(a => {
          let res = "";
          if(c.eventId === "333mbf") res = decodeMbldResult(a);
          else if(c.eventId === "333fm") res = centiToDisplay(a*100, true);
          else res = centiToDisplay(a);
          let addBrackets = false;
          if(a === bracketer.best && !bracketer.bestFound){ bracketer.bestFound = true; addBrackets = true;}
          else if(a === bracketer.worst && !bracketer.worstFound){ bracketer.worstFound = true; addBrackets = true;}
          if(addBrackets && !["333bf", "444bf", "555bf", "333mbf", "777", "666", "333fm"].includes(c.eventId)){ return `(${res})`; }
          return res;
        }).filter(d => !d.includes("N/A")).join(", ");
        const isNZ = p.country === "NZ";

        if(isNZ){ champions[c.eventId].push(c); }
      }
    }
  }
  const current = JSON.parse(fs.readFileSync(filePath));
  const final = Object.values(champions).flatMap(championArray =>
    championArray.map(({ eventId, name, result, detail }) => ({
      eventId,
      year,
      champion: name,
      result,
      detail
    }))
  );
  current.push(...final);
  fs.writeFileSync(filePath, JSON.stringify(current, null, 2));
  console.info("Update done.");
}

async function fetchUnnoficialAPI(path){
  const res = await fetch(`https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/master/api/${path}.json`);
  if(!res.ok){ 
    console.warn("BAD RESPONSE FROM UNNOFICIAL WCA API " + path);
    return [];
    // throw new Error("BAD RESPONSE FROM UNNOFICIAL WCA API " + path); 
  }
  return (await res.json());
}

run(new Date().getUTCFullYear());