import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { centiToDisplay, decodeMbldResult } from '../helpers.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../data/records.json');

const events = [
  '333',
  '222',
  '444',
  '555',
  '666',
  '777',
  '333bf',
  '333fm',
  '333oh',
  'clock',
  'minx',
  'pyram',
  'skewb',
  'sq1',
  '444bf',
  '555bf',
  '333mbf',
];

async function fetchRecords() {
  const response = await fetch(
    `https://raw.githubusercontent.com/speedcubingnz2025/ResultsExport/main/output/national_records.json`,
  );
  if (!response.ok) {
    throw new Error('Bad response!');
  }
  return await response.json();
}

function getRecord() {}

async function run() {
  const newData = await fetchRecords();

  const fileContent = fs.readFileSync(filePath);
  const oldData = fileContent.length ? JSON.parse(fileContent) : {};

  const result = events.reduce((acc, eventId) => {
    const single = newData.singles
      .filter((s) => s.event_id === eventId)
      .map((s) => {
        const bestText = displayEventResult(s.best, eventId);
        return {
          personId: s.person_id,
          eventId: s.event_id,
          best: bestText,
          name: s.person_name,
          link:
            oldData[eventId]?.single.find(
              (c) => c.personId === s.person_id && c.best === bestText,
            )?.link || '',
        };
      });
    const average = newData.averages
      .filter((a) => a.event_id === eventId)
      .map((a) => {
        const avgText = displayEventResult(a.average, eventId);
        return {
          personId: a.person_id,
          eventId: a.event_id,
          best: avgText,
          name: a.person_name,
          link:
            oldData[eventId]?.average.find(
              (c) => c.personId === a.person_id && c.best === avgText,
            )?.link || '',
        };
      });
    acc[eventId] = {
      single,
      average,
    };
    return acc;
  }, {});

  fs.writeFileSync(filePath, JSON.stringify(result, null, 2));
  console.info('DONE UPDATING RECORDS');
}

const displayTime = (centi, includeCs = true) => {
  if (centi === -1) {
    return 'DNF';
  }
  if (centi === -2) {
    return 'DNS';
  }
  const hours = Math.floor(centi / 36e4);
  const minutes = Math.floor((centi % 36e4) / 6e3);
  const seconds = Math.floor((centi % 6e3) / 100);
  const centiseconds = centi % 100;
  const hText = hours > 0 ? `${hours}:` : '';
  const mText =
    hours > 0
      ? `${minutes.toString().padStart(2, '0')}:`
      : minutes > 0
        ? `${minutes}:`
        : ``;
  const sText =
    minutes > 0 || hours > 0
      ? `${seconds.toString().padStart(2, '0')}`
      : `${seconds}`;
  const cText = includeCs ? `.${centiseconds.toString().padStart(2, '0')}` : '';
  return `${hText}${mText}${sText}${cText}`;
};

const displayMulti = (value) => {
  if(value === -1) return 'DNF';
  if(value === -2) return 'DNS';
  const MM = value % 100;
  const TTTTT = Math.floor(value / 100) % 1e5;
  const difference = 99 - Math.floor(value / 1e7);
  const time = displayTime(TTTTT * 100, false);
  const solved = difference + MM;
  const attempted = solved + MM;
  return `${solved}/${attempted} ${time}`;
};

const displayEventResult = (value, event) => {
  if (event === '333fm') {
    // bad code to avoid annoying stuff
    if(value < 0) return value === -1 ? 'DNF' : 'DNS';
    if(value < 99) return value;
    return value / 100;
  }
  if (event === '333mbf') {
    return displayMulti(value);
  }
  return displayTime(value);
};

run();
