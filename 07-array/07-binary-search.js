/**
 * perform a binary search.
 * Note: A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
 */

function binary_Search(items, value) {
  let firstIndex = 0
  let lastIndex = items.length - 1
  let middleIndex = Math.floor((lastIndex + firstIndex) / 2)

  while (items[middleIndex] != value && firstIndex < lastIndex) {
    if (value < items[middleIndex]) {
      lastIndex = middleIndex - 1
    } else if (value > items[middleIndex]) {
      firstIndex = middleIndex + 1
    }
    middleIndex = Math.floor((lastIndex + firstIndex) / 2)
  }

  return items[middleIndex] != value ? -1 : middleIndex
}

let items = [1, 2, 3, 4, 5, 7, 8, 9]
console.log(binary_Search(items, 1))
console.log(binary_Search(items, 5))
