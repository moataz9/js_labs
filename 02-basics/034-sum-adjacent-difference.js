/**
 * sum of absolute differences of consecutive numbers of a given array of integers
 */

function sumAdjacentDiff(arr) {
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    result += Math.abs(arr[i] - arr[i - 1])
  }

  return result
}

console.log(sumAdjacentDiff([1, 2, 3, 2, -5])) // 1 + 1 + 1 + 7 = 10
