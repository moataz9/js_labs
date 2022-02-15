/**
 * split values of two given arrays into two groups.
 * If an element in filter is truthy,
 * the corresponding element in the collection belongs to the first group;
 * otherwise, it belongs to the second group.
 */

function bifurcate(arr, filter) {
  return arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []])
}

console.log(bifurcate([1, 2, 3, 4], [true, true, false, true]))
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true]))
console.log(bifurcate([1, 2, 3, 4], [false, false, false, false]))
