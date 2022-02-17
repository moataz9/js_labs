/**
 * create a function that invokes each provided function with the arguments it receives and returns the results.
 */

function invokesOver(...fns) {
  return (...args) => fns.map(fn => fn.apply(null, args))
}

const minMax = invokesOver(Math.min, Math.max)

console.log(minMax(1, 2, 3, 4, 5))
console.log(minMax(1, 2, 34, 4, 5))
console.log(minMax(1, 2, 3, -4, 35))
