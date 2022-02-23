/**
 * Get removed elements of an given array until the passed function returns true
 */

function takeWhile(arr, fn) {
  for (const [i, val] of arr.entries()) {
    if (fn(val)) return arr.slice(0, i)
  }
  return arr
}

console.log(takeWhile([1, 2, 3, 4], n => n >= 3))
