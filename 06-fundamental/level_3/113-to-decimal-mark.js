/**
 * Convert a float-point arithmetic to the Decimal mark form and It will make a comma separated string from a number
 */

function toDecimalMark(num) {
  return  num.toLocaleString()
}

console.log(toDecimalMark(12305030388.9087))
console.log(toDecimalMark(123.2264))
console.log(toDecimalMark(-100.1))
