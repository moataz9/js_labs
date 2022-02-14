/**
 * Return true if the provided predicate function returns true for at least one element in a collection, false otherwise
 */

function any(arr, fn = Boolean) {
  return arr.some(fn)
}

console.log(any([0, 1, 2, 0], x => x >= 2))
console.log(any([0, 0, 1, 0]))
