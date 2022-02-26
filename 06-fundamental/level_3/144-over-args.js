/**
 * Create a function that invokes the provided function with its arguments transformed
 */

function overArgs(fn, transforms) {
  return (...args) => fn(...args.map((val, i) => transforms[i](val)))
}

const square = n => n ** 2
const double = n => n * 2
const fn = overArgs((x, y) => [x, y], [square, double])

console.log(fn(9, 3))
console.log(fn(5, 2))
