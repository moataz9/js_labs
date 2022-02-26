/**
 * Create a new object from the combination of two or more objects
 */

function merge(...obj) {
  return [...obj].reduce((acc, obj) => {
    return Object.keys(obj).reduce((a, k) => {
      acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k]
      return acc
    }, {})
  }, {})
}

const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
}
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo',
}

console.log(merge(object, other))
// console.log(Object.assign(object, other))
console.log(Object.assign(other, object))
