/**
 * Get a copy of the object where the keys have become the values and the values the keys.
 */

function invert_key_value(obj) {
  let result = {}
  let keys = _keys(obj)
  for (let i = 0, length = keys.length; i < length; i++) {
    result[obj[keys[i]]] = keys[i]
  }
  return result
}
function _keys(obj) {
  if (!isObject(obj)) return []
  if (Object.keys) return Object.keys(obj)
}
function isObject(obj) {
  let type = typeof obj
  return type === 'function' || (type === 'object' && !!obj)
}
console.log(invert_key_value({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }))
