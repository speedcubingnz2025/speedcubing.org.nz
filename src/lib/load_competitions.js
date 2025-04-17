async function loadCompetitions() {
  const urlParams = new URLSearchParams(window.location.search);
  const dateParam = urlParams.get("date"); // "2025-01-28"

  const response = await fetch(
    "https://raw.githubusercontent.com/JackMaddigan/snz-comps-updater/main/data.json"
  );

  const comps = (await response.json()).competitions;

  const today = new Date(dateParam || Date.now())
    .toLocaleDateString("en-NZ", {
      timeZone: "Pacific/Auckland",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-");

  const current = [],
    upcoming = [],
    recent = [];

  for (const comp of comps) {
    if (comp.date.from > today) {
      upcoming.push(comp);
    } else if (comp.date.till < today) {
      recent.push(comp);
    } else {
      current.push(comp);
    }
  }

  recent.reverse();
  return {current, upcoming, recent}
}

function dateToShort(dateString) {
  // param: yyyy-mm-dd
  return new Date(dateString).toLocaleDateString("en-US", {
    timeZone: "Pacific/Auckland",
    day: "numeric",
    month: "short", // Abbreviated month (e.g., "Feb")
  });
}

function formatRegText(comp){
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

  const now = Date.now();
    const regOpens = new Date(comp.registration.open);
    const regCloses = new Date(comp.registration.close);
    const regMessage =
      regCloses < now
        ? `Registration is closed`
        : regOpens <= now
        ? `Register now until ${regCloses.toLocaleDateString(
            ...dateDisplayOptions
          )}`
        : `Registration opens ${regOpens.toLocaleDateString(
            ...dateDisplayOptions
          )}`;
    return `<a class="reg-link" href="https://www.worldcubeassociation.org/competitions/${comp.id}/register" target="blank">${regMessage}</a>`;
}

export  {loadCompetitions, dateToShort, formatRegText};