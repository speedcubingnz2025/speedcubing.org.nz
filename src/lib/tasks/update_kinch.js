// this file will be automatically run by the GH action worflow in .github/workflows/update_kinch.yml
// you can also run it manually with `node src/lib/tasks/update_kinch.js`
// it will update src/lib/data/kinch.json
// currently, it only scrapes the top 30 countries from https://wca.cuber.pro/, but you can edit line 51 to change that


// src/lib/tasks/update_kinch.js
import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { eventOrder } from '../helpers.js';

// Map full event names to codes
const eventMap = {
  "3x3": "333",
  "2x2": "222",
  "3x3 Blindfolded": "333bf",
  "3x3 One-Handed": "333oh",
  "3x3 Fewest Moves": "333fm",
  "3x3 Multi-Blind": "333mbf",
  "4x4": "444",
  "4x4 Blindfolded": "444bf",
  "5x5": "555",
  "5x5 Blindfolded": "555bf",
  "6x6": "666",
  "7x7": "777",
  "Clock": "clock",
  "Megaminx": "minx",
  "Pyraminx": "pyram",
  "Skewb": "skewb",
  "Square-1": "sq1"
};

// Scrape the site and return structured JSON
async function scrapeKinchJSON() {
  const url = "https://wca.cuber.pro/";

  const { data: html } = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
    timeout: 20000,
  });

  const $ = cheerio.load(html);
  const countries = [];

  $("table tbody tr").each((i, tr) => {
    if (i >= 30) return false; // stop after 30 rows

    const children = $(tr).children();

    const rank = parseInt($(children[0]).text().trim(), 10);

    const countryTd = $(children[1]);
    const countryName = countryTd.find("span").text().trim();
    const flagClass = countryTd.find("i.flag").attr("class") || "";
    const flagMatch = flagClass.match(/flag-([a-z]{2})/i);
    const flag = flagMatch
      ? `https://twemoji.maxcdn.com/v/latest/72x72/${[...flagMatch[1].toUpperCase()].map(c => (0x1f1e6 + c.charCodeAt(0) - 65).toString(16)).join("-")}.png`
      : "";

    const overall = parseFloat($(children[2]).text().trim()) || 0;

    const scores = {};
    eventOrder.forEach((code, idx) => {
      const scoreTd = $(children[idx + 3]);
      const scoreText = scoreTd.text().trim();
      scores[code] = scoreText ? parseFloat(scoreText) : null;
    });

    countries.push({ country: countryName, rank, flag, overall, scores });
  });

  return countries;
}

// Update kinch.json
export async function updateKinchJSON(jsonPath = "./src/lib/data/kinch.json") {
  try {
    console.log("Scraping Kinch data...");
    const data = await scrapeKinchJSON();
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), "utf8");
    console.log(`Kinch JSON updated: ${jsonPath}`);
  } catch (err) {
    console.error("Error scraping Kinch:", err);
  }
}

// Run directly if executed
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  updateKinchJSON();
}
