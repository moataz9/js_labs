/**
 * find the maximum difference between any two adjacent elements of a given array of integers.
 */

function maxConsecutiveDiff(arr) {
  let max = -1
  let temp

  for (let i = 0; i < arr.length - 1; i++) {
    temp = Math.abs(arr[i] - arr[i + 1])
    max = Math.max(max, temp)
  }

  return max
}

console.log(maxConsecutiveDiff([1, 2, 3, 4, 9, 8])) // 9 - 4 = 5
console.log(maxConsecutiveDiff([1, 2, 3, 18, 9])) // 18 - 3 = 15
console.log(maxConsecutiveDiff([13, 2, 3, 8, 9])) // 13 - 2 = 11
