/**
 * retrieve all the values of an object's properties.
 */

function allValues(obj) {
  let keys = _keys(obj)
  let length = keys.length
  let values = Array(length)

  for (let i = 0; i < length; i++) {
    values[i] = obj[keys[i]]
  }

  return values
}

function _keys(obj) {
  if (!isObject(obj)) return []

  if (Object.keys) return Object.keys(obj)

  let keys = []

  for (let key in obj) keys.push(key)

  return keys
}

function isObject(obj) {
  let type = typeof obj
  return type === 'function' || (type === 'object' && !!obj)
}

console.log(allValues({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }))
