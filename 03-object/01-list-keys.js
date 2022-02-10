/**
 * list the properties of a JavaScript object
 */

function _keys(obj) {
  if (!isObject(obj)) return []

  if (Object.keys) return Object.keys(obj)
}

function isObject(obj) {
  let type = typeof obj
  return type === 'function' || (type === 'object' && !!obj)
}

console.log(_keys({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }))

console.log(
  _keys({
    name: 'David Rayy',
    sclass: 'VI',
    rollno: 12,
  })
)