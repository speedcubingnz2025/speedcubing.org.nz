/**
 * Extract the text from a markdown link, or return the text if there is no link in the text
 * @param text the comp location, either just a string or markdown link
 * @returns the string from the markdown link
 */
function extractMarkdownLink(text){
  if(!text.includes("[")){ return text; }
  let res = text.match(/(?<=\[)[^\]]*(?=\])/);
  return res[0];
}

/**
 * Some rubbishy code to help categorise and display comps 
 * @param comp Competition from competitions.json
 * @returns 
 * whenStatus (recent | upcoming | current), 
 * regStatus (ots | closed | future | open), 
 * showActions (boolean),
 * regText (string)
 */
function status(comp){
  const now = Date.now();
  const regOpensDate = new Date(comp.registration_open);
  const regClosesDate = new Date(comp.registration_close);

  // Make YYYY-MM-DD string of the current NZ time to compare against the YYYY-MM-DD strings of comp.start_date and comp.end_date
  const todayYMD = new Date(Date.now()).toLocaleDateString("en-NZ", 
    {timeZone: "Pacific/Auckland", year: "numeric", month: "2-digit", day: "2-digit"})
    .split("/").reverse().join("-");

  // recent | upcoming | current
  const whenStatus = comp.end_date < todayYMD ? "recent" : comp.start_date > todayYMD ? "upcoming" : "current";

  // Use these to help determine the registration status of the comp
  const onlineRegClosed = now >= regClosesDate;
  const regNotOpenYet = now < regOpensDate;

  // ots | closed | future | open
  const regStatus = onlineRegClosed ? (comp.ots ? "ots" : "closed") : regOpensDate > now ? "future" : "open";

  // Show actions buttons if current/upcoming and online reg is closed
  const showActions = ["current", "upcoming"].includes(whenStatus) && ["ots", "closed"].includes(regStatus);

  // Determine options for formatting date strings to display for the regText
  const dateOptions = ["en-US", {month: "short", day: "numeric", hour: "numeric", minute: "numeric", hour12: true}];

  // Make text displaying the registration status
  const regText = regStatus === "open" ? `Register now until ${regClosesDate.toLocaleDateString(...dateOptions)}` :
    regStatus === "ots" ? "Online registration closed, register at the competition" : 
    ["recent", "current"].includes(whenStatus) ? "" :
    regStatus === "closed" ? "Registration is closed" : 
    `Registration opens ${regOpensDate.toLocaleDateString(...dateOptions)}`;

  return {whenStatus, regStatus, showActions, regText};
}

export {extractMarkdownLink, status}