/**
 * cast the provided value as an array if it's not one.
 */

function castArray(val) {
  return Array.isArray(val) ? val : [val]
}

console.log(castArray('moataz'))
console.log(castArray([100]))
