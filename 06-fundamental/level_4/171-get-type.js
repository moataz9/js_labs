/**
 * get the native type of a value. Returns lowercased constructor name of value,
 * "undefined" or "null" if value is undefined or null.
 */

function getType(v) {
  return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase()
}

console.log(getType(new Set([1, 2, 3])))
