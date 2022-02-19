/**
 * perform left-to-right function composition.
 */

function composeRight(...fns) {
  return fns.reduce(
    (f, g) =>
      (...args) =>
        g(f(...args))
  )
}

const add = (x, y) => x + y
const square = x => x ** 2

const addAndSquare = composeRight(add, square)

console.log(addAndSquare(1, 2))
console.log(addAndSquare(5, 2))
console.log(addAndSquare(3, 2))
