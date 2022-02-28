/**
 * Check whether a value is object-like also check whether the provided value is not null and its typeof is equal to 'object'
 */

function isObjectLike(val) {
  return val !== null && typeof val === 'object'
}

console.log(isObjectLike({})) // true
console.log(isObjectLike([1, 2, 3])) // true
console.log(isObjectLike(x => x)) // false
console.log(isObjectLike(null)) // false
