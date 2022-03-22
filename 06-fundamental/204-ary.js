/**
 * Create a function that accepts up to n arguments, ignoring any additional arguments
 */

function ary(fn, n) {
  return (...args) => fn(...args.slice(0, n))
}

const firstTwoMax = ary(Math.max, 2)
console.log([[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)))
