/**
 * round a number to a specified amount of digits.
 */

function round(n, decimals = 0) {
  return Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
}

console.log(round(1.005, 2))
console.log(round(1.05, 2))
console.log(round(1.0005, 2))
