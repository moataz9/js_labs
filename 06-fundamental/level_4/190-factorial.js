/**
 *
 */

function factorial(n) {
  return n < 0 ? 'negative numbers not allowed!!' : n <= 1 ? 1 : n * factorial(n - 1)
}

console.log(factorial(1))
console.log(factorial(5))
console.log(factorial(7))
console.log(factorial(-7))
