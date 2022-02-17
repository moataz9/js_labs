/**
 * Remove the key-value pairs corresponding to the given keys from an object
 */

function omit(obj, arr) {
  return arr.reduce((acc, key) => (acc[key] ? delete obj[key] : obj, acc), obj)
}

console.log(omit({ a: 1, b: '2', c: 3 }, ['b']))
console.log(omit({ a: 1, b: 2, c: 3 }, ['c']))
