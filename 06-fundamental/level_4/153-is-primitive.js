/**
 * Get a boolean determining if the passed value is primitive or not
 */

function isPrimitive(val) {
  return !['object', 'function'].includes(typeof val) || val === null
}

console.log(isPrimitive(null)) // true
console.log(isPrimitive(50)) // true
console.log(isPrimitive('Hello!')) // true
console.log(isPrimitive(false)) // true
console.log(isPrimitive(Symbol())) // true
console.log(isPrimitive([])) // false
console.log(isPrimitive({})) // false
console.log(isPrimitive(() => [])) // false
