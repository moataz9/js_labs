/**
 * create a n-dimensional array with given value.
 */

function initializeNDArray(val, ...args) {
  // return args.length === 0 ? val : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)))
  if (args.length === 0) {
    return val
  } else {
    return Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)))
  }
}

console.log(initializeNDArray(1, 3))
console.log(initializeNDArray(5, 2, 2, 2))
