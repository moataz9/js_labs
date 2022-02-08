/**
 * find the maximum possible sum of some of its k consecutive numbers
 * (numbers that follow each other in order.)
 * of a given array of positive integers.
 */

function maxConsecutiveSum(nums, k) {
  let result = 0
  let temp_sum = 0

  for (let i = 0; i < k - 1; i++) {
    temp_sum += nums[i]
  }

  for (let i = k - 1; i < nums.length; i++) {
    temp_sum += nums[i]

    if (temp_sum > result) result = temp_sum

    temp_sum -= nums[i - k + 1]
  }

  return result
}

console.log(maxConsecutiveSum([1, 2, 3, 14, 5], 2)) // two max consecutive is 14 + 5 = 19
console.log(maxConsecutiveSum([2, 3, 5, 2, 6], 3)) // three max consecutive is 5 + 2 + 6 = 13
console.log(maxConsecutiveSum([9, 3, 5, 1, 7], 2)) // two max consecutive is 9 + 3 = 12
