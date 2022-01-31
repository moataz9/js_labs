/**
 * Check whether the provided value is of the specified type
 */

function is(type, val) {
  return ![, null].includes(val) && val.constructor === type
}

console.log(is(Array, [1])) // true
console.log(is(ArrayBuffer, new ArrayBuffer())) // true
console.log(is(Map, new Map())) // true
console.log(is(RegExp, /./g)) // true
console.log(is(Set, new Set())) // true
console.log(is(WeakMap, new WeakMap())) // true
console.log(is(WeakSet, new WeakSet())) // true
console.log(is(String, '')) // true
console.log(is(String, new String(''))) // true
console.log(is(Number, 1)) // true
console.log(is(Number, new Number(1))) // true
console.log(is(Boolean, true)) // true
console.log(is(Boolean, new Boolean(true))) // true
