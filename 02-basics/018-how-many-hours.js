/**
 * convert a given number to hours and minutes
 */

function hours_minutes(num) {
  let hours = Math.floor(num / 60)
  let minutes = num % 60
  return `${hours}:${minutes}`
}

console.log(hours_minutes(71));
console.log(hours_minutes(450));
console.log(hours_minutes(1441));