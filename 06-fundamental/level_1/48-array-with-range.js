/**
 * Initialize an array containing the numbers in the specified range where start and end are inclusive with their common difference step
 */

function arrayWithRange(end, start = 0, step = 1) {
  return Array.from({ length: Math.ceil((end + 1 - start) / step) }).map((v, i) => i * step + start)
}

console.log(arrayWithRange(5))
console.log(arrayWithRange(8, 3))
console.log(arrayWithRange(6, 0, 2))
