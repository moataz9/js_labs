/**
 * Get the highest index at which value should be inserted into array in order to maintain its sort order
 */

function sortedLastIndex(arr, n) {
  const isDescending = arr[0] > arr[arr.length - 1]
  const index = arr.reverse().findIndex(el => (isDescending ? n <= el : n >= el))
  return index === -1 ? 0 : arr.length - index
}

console.log(sortedLastIndex([10, 20, 30, 30, 40], 30))
