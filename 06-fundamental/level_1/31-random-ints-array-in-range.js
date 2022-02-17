/**
 * Get an array of given n random integers in the specified range
 */

function randomIntArrayInRange (min, max, n = 1) {
  return Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min)
}
console.log(randomIntArrayInRange(1, 20, 10))
console.log(randomIntArrayInRange(-10, 10, 5))
