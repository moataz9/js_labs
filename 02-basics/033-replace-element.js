/**
 * replace all the numbers with a specified number of a given array of integers.
 */

function replaceElementInArray(arr, old_value, new_value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === old_value) {
      arr[i] = new_value
    }
  }
  return arr
}

console.log('Original Array:', [1, 2, 3, 2, 2, 8, 1, 9])
console.log('replace element in array', replaceElementInArray([1, 2, 3, 2, 2, 8, 1, 9], 2, 5))
