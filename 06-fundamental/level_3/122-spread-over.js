/**
 * takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.
 */

function spreadOver(fn) {
  return args => fn(...args)
}

const arrayMax = spreadOver(Math.max)
console.log(arrayMax([1, 2, 3]))
