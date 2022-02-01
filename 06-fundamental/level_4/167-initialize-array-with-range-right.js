/**
 * Initializes an array containing the numbers in the specified range
 * (in reverse) where start and end are inclusive with their common difference step
 */

function initializeArrayWithRangeRight(end, start = 0, step = 1) {
  return Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  )
}

console.log(initializeArrayWithRangeRight(5))
console.log(initializeArrayWithRangeRight(7, 3))
console.log(initializeArrayWithRangeRight(9, 0, 2))
