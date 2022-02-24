/**
 * get the lowest index at which value should be inserted into array in order to maintain its sort order.
 */

function sortedIndex(arr, n) {
  const isDescending = arr[0] > arr[arr.length - 1]
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el))
  return index === -1 ? 0 : index
}

console.log(sortedIndex([5, 3, 2, 1], 4))
console.log(sortedIndex([30, 50], 40))
