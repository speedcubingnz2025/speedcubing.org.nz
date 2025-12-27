export const eventOrder = ["333","222","444","555","666","777","333bf","333fm","333oh",
"clock","minx","pyram","skewb","sq1","444bf","555bf","333mbf"];
export const eventNames = ["3x3x3 CUBE", "2x2x2 CUBE", "4x4x4 CUBE", "5x5x5 CUBE", "6x6x6 CUBE", "7x7x7 CUBE", 
"3x3x3 BLINDFOLDED", "3x3x3 FEWEST MOVES", "3x3x3 ONE-HANDED", "CLOCK", "MEGAMINX", "PYRAMINX", "SKEWB", 
"SQUARE-1", "4x4x4 BLINDFOLDED", "5x5x5 BLINDFOLDED", "3x3x3 MULTI-BLIND"];


export function centiToDisplay(centi, removeDecimals = false) {
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
export function decodeMbldResult(value) {
  // 0DDTTTTTMM
  //   get MM
  const unsolved = value % 100;
  // solved = difference + missed
  const solved = 99 - Math.floor(value / 1e7) + unsolved;
  // seconds is TTTTT so get rid of MM first then get rid of DD
  const seconds = Math.floor(value / 100) % 1e5;

  return `${solved}/${solved + unsolved} ${centiToDisplay(seconds*100, true)}`;
}