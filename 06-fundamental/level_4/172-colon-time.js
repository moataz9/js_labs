/**
 * Get a string of the form HH:MM:SS from a Date object
 */

function getColonTimeFromDate(date) {
  return date.toTimeString().slice(0, 8)
}

console.log(getColonTimeFromDate(new Date()))
