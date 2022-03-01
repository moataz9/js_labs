/**
 * Iterate over all own properties of an object in reverse, running a callback for each one
 */

function forOwnRight(obj, fn) {
  return Object.keys(obj)
    .reverse()
    .forEach(key => fn(obj[key], key, obj))
}

const myObj = { foo: 'bar', a: 1 }
console.log(forOwnRight(myObj, (v, k) => console.log(k, ':', v)))
