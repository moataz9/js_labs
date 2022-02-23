/**
 * Get removed elements from the end of a given array until the passed function returns true
 */

function takeWhileRight(arr, fn) {
  for (const [i, val] of arr.reverse().entries()) {
    if (fn(val)) return arr.reverse().slice(-i)
  }
  return arr
}

console.log(takeWhileRight([1, 2, 3, 4], n => n < 3))
console.log(takeWhileRight([1, 2, 3, 3, 4], n => n < 3))
