/**
 * Check whether an object contains specified property.
 */

function hasKey(obj, key) {
  return isObject(obj) && hasOwnProperty.call(obj, key)
}
function isObject(obj) {
  let type = typeof obj
  return type === 'function' || (type === 'object' && !!obj)
}

console.log(hasKey({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }, 'green'))