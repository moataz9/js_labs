/**
 * Invert the key-value pairs of an object, without mutating it
 */

function invertKeyValues(obj, fn) {
  return Object.keys(obj).reduce((acc, key) => {
    const val = fn ? fn(obj[key]) : obj[key]
    acc[val] = acc[val] || []
    acc[val].push(key)
    return acc
  }, {})
}

console.log(invertKeyValues({ a: 1, b: 2, c: 1 }))
console.log(invertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group_' + value))
