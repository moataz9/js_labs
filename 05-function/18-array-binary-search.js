/**
 * Search JavaScript arrays with a binary search
 * @param {Array} arr_nums - array of numbers ot search in
 * @param {Array} delement - number to search for
 * @return {Number} index of delement
 */

function binarySearch(arr_nums, delement) {
  let mposition = Math.floor(arr_nums.length / 2)

  if (arr_nums[mposition] === delement) return mposition
  else if (arr_nums.length === 1) return null
  else if (arr_nums[mposition] < delement) {
    let arr = arr_nums.slice(mposition + 1)
    let res = binarySearch(arr, delement)
    if (res === null) {
      return null
    } else {
      return mposition + 1 + res
    }
  } else {
    let arr1 = arr_nums.slice(0, mposition)
    return binarySearch(arr1, delement)
  }
}

let myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23]
console.log(binarySearch(myArray, 6)) // 4
console.log(binarySearch(myArray, 14)) // 8
console.log(binarySearch(myArray, 20)) // 12
