/**
 * Remove specified elements from the right of a given array of elements
 */

function removeFromRight(arr, n = -1) {
  return arr.slice(n)
}

console.log(removeFromRight([1, 2, 3]))
console.log(removeFromRight([1, 2, 3], -1))
console.log(removeFromRight([1, 2, 3], -2))
console.log(removeFromRight([1, 2, 3], -4))
