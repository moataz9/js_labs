/**
 * convert a value to a safe integer.
 */

function toSafeInteger(num) {
  return Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER))
}

console.log(toSafeInteger('3.2'))
console.log(toSafeInteger(Infinity))
