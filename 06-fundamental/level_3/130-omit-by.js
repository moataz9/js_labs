/**
 * Create an object composed of the properties the given function returns falsey for.
 * The function is invoked with two arguments: (value, key)
 */

function omitBy(obj, fn) {
  return Object.keys(obj)
    .filter(k => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {})
}

console.log(omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'))
