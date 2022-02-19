/**
 * create a deep clone of an object.
 */

function deepObjectClone(obj) {
  let clone = Object.assign({}, obj)
  Object.keys(clone).forEach(key => {
    clone[key] = typeof obj[key] === 'object' ? deepObjectClone(obj[key]) : obj[key]
    return clone
  })

  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone
}

const a = { foo: 'bar', obj: { a: 1, b: 2 } }
const b = deepObjectClone(a) // a !== b, a.obj !== b.obj
console.log(a)
console.log(b)
console.log(a === b);
console.log(a.foo === b.foo);
console.log(a.obj === b.obj);