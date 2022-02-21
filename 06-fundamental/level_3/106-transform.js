/**
 * Apply a function against an accumulator and each key in the object
 */

function transform(obj, fn, acc) {
  return Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc)
}

const obj = { a: 1, b: 2, c: 1 }
const fn = (r, v, k) => ((r[v] || (r[v] = [])).push(k), r)
const acc = {}

console.log(transform(obj, fn, acc));
