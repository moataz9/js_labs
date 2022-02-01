/**
 * Get all indices of values in an array
 */

function indexOfAll(arr, val) {
  return arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
}

console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1));
console.log(indexOfAll([1, 2, 3], 4));
