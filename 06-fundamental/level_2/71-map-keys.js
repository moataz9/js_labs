/**
 * Create an object with keys generated by running the provided function for each key and the same values as the provided object
 */

function mapKeys(obj, fn) {
  return Object.keys(obj).reduce((acc, k) => {
    acc[fn ? fn(obj[k], k, obj) : k] = obj[k]
    return acc
  }, {})
}

console.log(mapKeys({ a: 1, b: 3 }, (val, key) => key + val))
console.log(mapKeys({ a: 1, b: 2 }))