/**
 * create an object composed of the properties the given function returns truthy for.
 * The function is invoked with two arguments: (value, key).
 */

function pickBy(obj, fn) {
  return Object.keys(obj)
    .filter(k => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {})
}

console.log(pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'))
