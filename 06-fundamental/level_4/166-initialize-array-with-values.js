/**
 * Initialize and fill an array with the specified values
 */

function initializeArrayWithValues(n, val = 0) {
  return Array(n).fill(val)
}

console.log(initializeArrayWithValues(5, 2))
console.log(initializeArrayWithValues(4, 0))
