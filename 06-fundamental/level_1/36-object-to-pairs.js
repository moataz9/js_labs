/**
 * create an array of key-value pair arrays from a given object.
 */

function objectToPairs(obj) {
  return Object.keys(obj).map(k => [k, obj[k]])
}

console.log(objectToPairs({ a: 1, b: 2 }))
console.log(objectToPairs({ a: 1, b: 2, c: 3 }))
