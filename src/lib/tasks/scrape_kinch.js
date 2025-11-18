import axios from "axios";
import * as cheerio from "cheerio";

// ---------------------
// Utilities
// ---------------------
function countryCodeToTwemojiURL(code) {
  if (!code || code.length !== 2) return "";
  const chars = code.toUpperCase().split("");
  const codePoints = chars.map(c => 0x1f1e6 + (c.charCodeAt(0) - 65));
  const hex = codePoints.map(cp => cp.toString(16)).join("-");
  return `https://twemoji.maxcdn.com/v/latest/72x72/${hex}.png`;
}

function codeToFlagTwemoji(code) {
  const url = countryCodeToTwemojiURL(code);
  return `<img src="${url}" width="28" height="28" style="vertical-align:middle; margin-right:8px;" alt="${code}">`;
}

// ---------------------
// Event icons using cubing-icon class
function eventToIcon(event) {
  const codeMap = {
    "333": "333", "222": "222", "333bf": "333bf", "333oh": "333oh",
    "333fm": "333fm", "333mbf": "333mbf", "444": "444", "444bf": "444bf",
    "555": "555", "555bf": "555bf", "666": "666", "777": "777",
    "clock": "clock", "minx": "minx", "pyram": "pyram", "skewb": "skewb", "sq1": "sq1"
  };
  const code = codeMap[event.toLowerCase()];
  return code ? `<i class="cubing-icon event-${code}"></i>` : event;
}

// ---------------------
// Scrape Kinch
export async function scrapeKinch() {
  try {
    const url = "https://wca.cuber.pro/";
    const { data: html } = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0", Accept: "text/html" },
      timeout: 20000,
    });

    const $ = cheerio.load(html);

    // Headers
    const headers = [];
    $("table thead tr th").each((_, th) => {
      const text = $(th).text().trim();
      if (text) headers.push(text);
    });

    // Replace event headers with icons
    const newHeaders = headers.map((h, i) => i >= 3 ? eventToIcon(h) : h);

    // Rows
    const rows = [];
    $("table tbody tr").each((_, tr) => {
      const children = $(tr).children();
      const rank = $(children[0]).text().trim();

      const countryTh = $(children[1]);
      const countryName = countryTh.find("span").text().trim();
      const flagClass = countryTh.find("i.flag").attr("class") || "";
      const match = flagClass.match(/flag-([a-z]{2})/i);
      const flagSpan = match ? codeToFlagTwemoji(match[1].toLowerCase()) : "";

      const overallTd = $(children[2]);
      const overall = overallTd.find("strong, small").text().trim();

      const eventScores = [];
      for (let i = 3; i < children.length; i++) {
        const td = $(children[i]);
        if (td.is("td")) {
          const score = td.find("strong, small").text().trim();
          if (score) eventScores.push(score);
        }
      }

      const rowClass = countryName.toLowerCase() === "new zealand" ? "highlight-nz" : "";
      rows.push({ data: [rank, `${flagSpan}${countryName}`, overall, ...eventScores], class: rowClass });
    });

    return { headers: newHeaders, rows };
  } catch (err) {
    console.error("Error scraping Kinch:", err.message);
    return { headers: [], rows: [] };
  }
}
