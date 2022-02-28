/**
 * Check whether the provided value is an object created by the Object constructor
 */

function isPlainObject(val) {
  return !!val && typeof val === 'object' && val.construtor === 'Object'
}

console.log(isPlainObject({ a: 1 })) // false
console.log(isPlainObject(new Map())) // false
