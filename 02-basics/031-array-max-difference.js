/**
 * find the maximum difference among all possible pairs of a given array of integers.
 */
function arrayMaxDiff(arr) {
  let max_result = 0

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k !== i && k < arr.length; k++) {
      let diff = Math.abs(arr[i] - arr[k])
      max_result = Math.max(max_result, diff)
    }
  }

  return max_result
}

console.log(arrayMaxDiff([1, 2, 3, 8, 9])) // 8 - 1 = 7
console.log(arrayMaxDiff([1, 2, 3, 18, 9])) // 18 - 1 = 17
console.log(arrayMaxDiff([13, 2, 3, 8, 9])) // 13 - 2 = 11
