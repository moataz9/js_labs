/**
 * Clamp a number within the inclusive range specified by the given boundary values a and b
 */

function clampNumber(num, a, b) {
  return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b))
}

console.log(clampNumber(2, 3, 5))
console.log(clampNumber(1, -1, -5))
