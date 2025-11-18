import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../data/competitions.json');

async function run(){
  // init date for filtering old comps out
  const now = new Date();
  const thirtyDaysBeforeNow = new Date(now);
  thirtyDaysBeforeNow.setDate(now.getDate() - 30);

  let pageCounter=1;
  let numCompsOnPage = 25;
  let comps = [];

  // Paginate. getComps filters by date, so will be less than 25 most of the time, unless 25+ are after 30 days ago
  while(numCompsOnPage >= 25){ 
    const page = await getComps(pageCounter, thirtyDaysBeforeNow);
    numCompsOnPage = page.length;
    pageCounter++;
    comps.push(...page); 
  }

  fs.writeFileSync(filePath, JSON.stringify(comps, null, 2));
  console.info("DONE");
}

async function getComps(pageCounter, thirtyDaysBeforeNow){
  // fetch from WCA
  const response = await fetch(`https://www.worldcubeassociation.org/api/v0/competitions?country_iso2=NZ&page=${pageCounter}`);
  if(!response.ok){ throw new Error("Bad response!"); }
  let comps = await response.json();

  // remove unnecessary fields and filter old comps
  return comps.map(pickProps).filter(c => new Date(c.end_date) > thirtyDaysBeforeNow);
}

const pickProps = ({
  id, name, venue, city, registration_open, registration_close,
  start_date, end_date, website, url, latitude_degrees,
  longitude_degrees, event_ids, date_range
}) => ({
  id, name, venue, city, registration_open, registration_close,
  start_date, end_date, website, url, latitude_degrees,
  longitude_degrees, event_ids, date_range
});

run();