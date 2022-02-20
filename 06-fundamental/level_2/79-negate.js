/**
 * Negates a predicate function
 */

function negate(fn) {
  return (...args) => !fn(...args)
}

console.log([1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)))
