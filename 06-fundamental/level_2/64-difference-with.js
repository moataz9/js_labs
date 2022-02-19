/**
 * Filter out all values from an array for which the comparator function does not return true
 */

function differenceWith(arr, val, comp) {
  return arr.filter(a => val.findIndex(b => comp(a, b)) === -1)
}

console.log(differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)))
