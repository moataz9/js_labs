/**
 * Get the median of an array of numbers
 */

function median(arr) {
  const mid = ~~(arr.length / 2) // Math.floor
  const nums = arr.sort((a, b) => a - b)

  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

console.log(median([5, 6, 50, 1, -5]))
console.log(median([1, 2, 3, 4, 5]))
