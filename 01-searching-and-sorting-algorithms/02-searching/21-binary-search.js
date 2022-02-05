/**
 * Finds the index of a given element in a sorted array using the binary search algorithm.
 */

function binarySearch(arr, item) {
  let l = 0
  let r = arr.length
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    const guess = arr[mid]
    if (guess === item) return mid
    if (guess > item) r = mid - 1
    else l = mid + 1
  }
  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 1))
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5))
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7))
