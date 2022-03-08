/**
 * Remove elements from the end of an array until the passed function returns true
 */

const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) {
    arr = arr.slice(0, -1)
  }
  return arr
}

console.log(dropRightWhile([1, 2, 3, 4], n => n < 3))
