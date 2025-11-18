import { scrapeKinch } from '$lib/tasks/scrape_kinch.js';

let cache = null;
let lastFetch = 0;
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

export async function getKinchRanks() {
  const now = Date.now();
  if (cache && now - lastFetch < CACHE_DURATION) return cache;

  try {
    const data = await scrapeKinch();
    cache = data;
    lastFetch = now;
    return data;
  } catch (err) {
    console.error("Error fetching Kinch ranks:", err.message);
    return { headers: [], rows: [] };
  }
}
