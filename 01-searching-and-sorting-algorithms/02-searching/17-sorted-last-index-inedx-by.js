/**
 * find the highest index at which a value should be inserted into an array in order to maintain its sort order, based on a provided iterator function
 */

function sortedLastIndexBy(arr, n, fn) {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1])
  const val = fn(n)
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => {
      return isDescending ? val <= el : val >= el
    })

  return index === -1 ? 0 : arr.length - index
}

console.log(sortedLastIndexBy([{ x: 4 }, { x: 6 }], { x: 6 }, o => o.x))
