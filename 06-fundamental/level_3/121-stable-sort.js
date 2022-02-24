/**
 * Perform stable sorting of an array, preserving the initial indexes of items when their values are the same
 */

function stableSort(arr, compare) {
  return arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item)
}

const arr = [0, 1, 2, 3, 7, 8, 9, 10, 4, 5, 6]
console.log(stableSort(arr, (a, b) => b - a))
console.log(stableSort(arr, () => 0))
console.log(stableSort(arr, () => Boolean))
