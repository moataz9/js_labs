/**
 * Convert temperatures to and from celsius ℃, fahrenheit ℉
 * C = (5/9) * (F - 32)
 */

function cToF(celsius) {
  return `${celsius} \xB0C is ${((celsius * 9) / 5 + 32).toFixed(2)} \xB0F.`
}

function fToC(fahrenheit) {
  return `${fahrenheit} \xB0F is ${(((fahrenheit - 32) * 5) / 9).toFixed(2)} \xB0C.`
}

console.log(cToF(60))
console.log(fToC(45))
