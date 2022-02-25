/**
 * Create a function that invokes the provided function with its arguments arranged according to the specified indexes
 */

function rearg(fn, indexes) {
  return (...args) => fn(...indexes.map(i => args[i]))
}

const rearged = rearg((a, b, c) => [a, b, c], [2, 0, 1])
console.log(rearged('b', 'c', 'a'))
