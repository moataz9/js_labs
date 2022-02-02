/**
 * Calculate the Hamming distance between two values
 */

function hammingDistance(num1, num2) {
  return ((num1 ^ num2).toString(2).match(/1/g) || '').length
}

console.log(hammingDistance(2, 3))
console.log(hammingDistance(5, 3))
