/**
 * Remove specified elements from the Left of a given array of elements
 */

function removeFromLeft(arr, n = 1) {
  return arr.slice(n)
}

console.log(removeFromLeft([1, 2, 3]))
console.log(removeFromLeft([1, 2, 3], 1))
console.log(removeFromLeft([1, 2, 3], 2))
console.log(removeFromLeft([1, 2, 3], 4))
