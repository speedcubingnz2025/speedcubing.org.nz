function getRegStatus(comp){
  const now = Date.now();
  const regOpens = new Date(comp.registration_open);
  const regCloses = new Date(comp.registration_close);

  // reg not open yet
  if(regOpens > now){ return "future"; }

  // reg open but is full
  if(regCloses > now && comp.full){ return "full"; }

  // reg is closed and ots unavailable due to being full or diabled
  if(regCloses < now && (!comp.ots || comp.ots && comp.full)){ return "closed"; }

  // reg is closed, there is ots, and limit is not full
  if(regCloses < now && comp.ots && !comp.full) { return "ots"; }

  // reg is open and not full
  return "open";
}

function getCompStatus(comp){
  const today = new Date(Date.now())
    .toLocaleDateString("en-NZ", {
      timeZone: "Pacific/Auckland",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-");
  
  // two upcoming statuses, decide which one based on if reg closed
  const upcoming = comp.start_date > today;
  const onlineRegClosed = ["closed", "ots"].includes(comp.reg_status);
  if(upcoming && onlineRegClosed){ return "soon"; }
  if(upcoming){ return "upcoming"; }

  // not upcoming, decide if current or recent
  if(comp.end_date < today){ return "recent"; }
  return "current";
}

function makeRegText(comp){
  // return empty string if competition is current
  if(comp.status === "current"){ return ""; }

  // check if finished
  if(comp.reg_status === "closed" && comp.status === "recent"){ return "Competition has finished"; }

  // upcoming and closed
  if(comp.reg_status === "closed"){ return "Registration is closed"; }

  // upcoming and other case
  if(comp.reg_status === "ots"){ return "Register at the competition"; }
  if(comp.reg_status === "full"){ return "Competitor limit reached - Register for waiting list"; }

  // upcoming and open
  const dateDisplayOptions = [
    "en-US",
    {
      month: "short", // "May"
      day: "numeric", // "12"
      hour: "numeric", // "6"
      minute: "numeric", // "00"
      hour12: true, // Use 12-hour clock with AM/PM
    },
  ];
  const regCloses = new Date(comp.registration_close);

  return `Register now until ${regCloses.toLocaleDateString(...dateDisplayOptions)}`;
}

function extractMarkdownLink(text){
  if(!text.includes("[")){ return text; }
  let res = text.match(/(?<=\[)[^\]]*(?=\])/);
  return res[0];
}

export { getRegStatus, getCompStatus, makeRegText, extractMarkdownLink }