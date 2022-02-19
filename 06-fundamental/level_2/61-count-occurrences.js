/**
 * count the occurrences of a value in an array.
 */

function countOccurrence(arr, val) {
  return arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
}

console.log(countOccurrence([1, 1, 3, 33, 2, 3], 1))
console.log(countOccurrence([1, 1, 3, 33, 2, 3], 33))
console.log(countOccurrence([1, 1, 3, 33, 2, 3], 3))
console.log(countOccurrence([1, 1, 3, 33, 2, 3], 2))
