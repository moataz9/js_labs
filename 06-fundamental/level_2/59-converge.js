/**
 * accepts a converging function and a list of branching functions and
 * returns a function that applies each branching function to the arguments and
 * the results of the branching functions are passed as arguments to the converging function.
 */

function converge(converger, fns) {
  return (...args) =>
    converger(
      ...fns.map(fn => {
        return fn.apply(null, args)
      })
    )
}

const average = converge(
  (a, b) => a / b,
  [
    // fn1
    arr => arr.reduce((a, v) => a + v, 0),
    // fn2
    arr => arr.length,
  ]
)

console.log(average([6, 7]))
console.log(average([1, 2, 3, 4, 5, 6, 7]))
