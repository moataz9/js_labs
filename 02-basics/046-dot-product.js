/**
 * Create the dot products of two given 3D vectors.
 * Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
 */

function dotProduct(vector1, vector2) {
  let result = 0
  for (let i = 0; i < 3; i++) {
    result += vector1[i] * vector2[i]
  }
  return result
}

console.log(dotProduct([1, 2, 3], [1, 2, 3]))
console.log(dotProduct([2, 4, 6], [2, 4, 6]))
console.log(dotProduct([1, 1, 1], [0, 1, -1]))
