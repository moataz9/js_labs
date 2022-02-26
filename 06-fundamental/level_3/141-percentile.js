/**
 * Calculate how many numbers in the given array are less or equal to the given value using the percentile formula
 */

function percentile(arr, num) {
  return (arr.filter(item => item <= num).length / arr.length) * 100
}

console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)) // 50;
console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)) // 100;
console.log(percentile([1, 2, 3, 4, 5, 6], 3)) // 50;
console.log(percentile([1, 2, 3, 4, 5, 6], 4)) // 66.66;
