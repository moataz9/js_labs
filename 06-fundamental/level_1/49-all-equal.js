/**
 * Check whether all elements in a given array are equal or not
 */

function allEqual(arr) {
  return arr.every(item => item === arr[0])
}

console.log(allEqual([1, 2, 2, 3, 4, 5, 6]))
console.log(allEqual([12, 12, 12, 12, 12]))
