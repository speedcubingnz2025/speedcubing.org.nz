import fs from "fs";
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../data/records.json');

async function run(){
  const events = ["333", "222", "444", "555", "666", "777", "333bf", "333fm", "333oh", 
    "clock", "minx", "pyram", "skewb", "sq1", "444bf", "555bf", "333mbf"]

  const contents = fs.readFileSync(filePath);
  const data = contents.length ? JSON.parse(contents) : {};
  
  // make object of eventId => array of people
  for(const eventId of events){
    const nowSingle = await getRecord(eventId, "single");
    const nowAverage = eventId === "333mbf" ? null : await getRecord(eventId, "average");
    
    const wasSingle = data?.[eventId]?.single;
    const wasAverage = data?.[eventId]?.average;

    data[eventId] = {
      "single": updateRecord(nowSingle, wasSingle, "single"),
      "average": updateRecord(nowAverage, wasAverage, "average")
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.info("DONE UPDATING RECORDS")
}

/**
 * return updated record array
 */
function updateRecord(updated, record, type){
  // if there was to be a new event, then it would not exist, so return the new records
  if(!record || record.length == 0){ return updated; }

  // if the result record improved, we don't need to keep any of the old ones, so return the new records
  const resultImproved = updated[0].best != record[0].best;
  if(resultImproved){ return updated; }

  // if the result is the same, we need to check to see if someone new tied the record
  const recordStrings = record.map(recordToString);

  // add item from updated to record if it was not in there already
  for(const updatedItem of updated){
    if(!recordStrings.includes(recordToString(updatedItem))){ record.push(updatedItem); }
  }
  
  return record;
}

function recordToString(e){
  return `${e.personId}${e.best}`;
}

async function getRecord(eventId, type){
  console.info(`Fetching ${eventId} ${type}<end>`);
  const response = await fetch(`https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/master/api/rank/NZ/${type}/${eventId}.json`);
  if(!response.ok){ throw new Error("Bad response!"); }
  let data = (await response.json()).items;

  // initialise with the 1st place result
  let best = [data.shift()];

  // handle ties by adding while it is equal to prev result
  while(data[0] && data[0].best === best[0].best){ best.push(data.shift()); }

  // map raw values to display values
  best.forEach(b =>  b.best = eventId === "333mbf" ? decodeMbldResult(b.best) : eventId==="333fm" && type==="single" ? `${b.best}` :  centiToDisplay(b.best));

  // add the person name since each result will only have WCA id so have to spam some fetches again
  for(const entry of best){ 
    entry.name = await getName(entry.personId); 
    entry.link = "";
    delete entry.rank; 
    delete entry.rankType; 
  }

  return best;
}

async function getName(wcaId){
  console.info(`Fetching ${wcaId}`);
  const response = await fetch(`https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/master/api/persons/${wcaId}.json`);
  if(!response.ok){ throw new Error("Bad response!"); }
  return (await response.json()).name;
}

function centiToDisplay(centi, removeDecimals = false) {
  if (centi == -1) return "DNF";
  if (centi == -2) return "DNS";
  if (centi == 0) return "N/A";
  const hours = Math.floor(centi / 360000);
  const minutes = Math.floor((centi - hours * 360000) / 6000);
  const seconds = Math.floor((centi - hours * 360000 - minutes * 6000) / 100);
  const centiseconds =
    centi - (hours * 360000 + minutes * 6000 + seconds * 100);
  let stringCentiseconds =
    centiseconds < 10 ? ".0" + centiseconds : "." + centiseconds;
  let stringSeconds =
    (minutes > 0 || hours > 0) && seconds < 10
      ? "0" + seconds + ""
      : seconds + "";
  let stringMinutes =
    hours > 0 && minutes < 10
      ? "0" + minutes + ":"
      : minutes == 0
      ? ""
      : minutes + ":";
  let stringHours = hours > 0 ? hours + ":" : "";
  return (
    stringHours +
    stringMinutes +
    stringSeconds +
    (removeDecimals ? "" : stringCentiseconds)
  );
}

/**
 * Decodes WCA MBLD integer
 * @param {integer} value WCA standard MBLD result
 * @returns string of attempt
 */
function decodeMbldResult(value) {
  // 0DDTTTTTMM
  //   get MM
  const unsolved = value % 100;
  // solved = difference + missed
  const solved = 99 - Math.floor(value / 1e7) + unsolved;
  // seconds is TTTTT so get rid of MM first then get rid of DD
  const seconds = Math.floor(value / 100) % 1e5;

  return `${solved}/${solved + unsolved} ${centiToDisplay(seconds*100, true)}`;
}



run();