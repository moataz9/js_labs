/**
 * find the lowest index at which a value should be inserted into an array in order to maintain its sorting order, based on the provided iterator function.
 */

function sortedIndexBy(arr, n, fn) {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1])
  const val = fn(n)
  const index = arr.findIndex(el => {
    return isDescending ? val >= fn(el) : val <= fn(el)
  })
  return index === -1 ? arr.length : index
}

console.log(sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x))
