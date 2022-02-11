/**
 * convert an object into a list of '[key, value]' pairs.
 */
function keyValuePairs(obj) {
  var keys = _keys(obj)
  var length = keys.length
  var pairs = Array(length)
  for (var i = 0; i < length; i++) {
    pairs[i] = [keys[i], obj[keys[i]]]
  }
  return pairs
}

function _keys(obj) {
  if (!isObject(obj)) return []
  if (Object.keys) return Object.keys(obj)
}

function isObject(obj) {
  var type = typeof obj
  return type === 'function' || (type === 'object' && !!obj)
}

console.log(keyValuePairs({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }))
