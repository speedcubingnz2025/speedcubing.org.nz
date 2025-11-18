import { scrapeKinch } from '$lib/tasks/scrape_kinch.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    const kinchData = await scrapeKinch();
    return { kinchData };
  } catch (err) {
    return { kinchData: { headers: [], rows: [] }, error: err.message };
  }
}
