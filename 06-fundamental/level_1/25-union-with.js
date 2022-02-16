/**
 * Find every element that exists in any of the two given arrays once.
 * using a provided comparator function.
 */

function unionWith(arr1, arr2, comp) {
  return Array.from(new Set([...arr1, ...arr2.filter(x => arr1.findIndex(y => comp(x, y)) === -1)]))
}

console.log(unionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)))
console.log(unionWith([1, 2, 3, 4], [1, 2, 3, 4, 5], (a, b) => Math.round(a) === Math.round(b)))
