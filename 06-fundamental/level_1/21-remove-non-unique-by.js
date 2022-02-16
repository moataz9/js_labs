/**
 * filter out the non-unique values in an array, based on a provided comparator function.
 */

function removeNonUniqueBy(arr, fn) {
  return arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)))
}

const array1 = [
  { id: 0, value: 'a' },
  { id: 1, value: 'b' },
  { id: 2, value: 'c' },
  { id: 3, value: 'c' },
  { id: 1, value: 'd' },
  { id: 0, value: 'e' },
]

console.log(removeNonUniqueBy(array1, (a, b) => a.id == b.id))
