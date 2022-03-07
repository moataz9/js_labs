/**
 * Remove elements in an array until the passed function returns true
 */

function dropWhile(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr = arr.slice(1)
  }
  return arr
}

console.log(dropWhile([1, 2, 3, 4], n => n >= 3))
