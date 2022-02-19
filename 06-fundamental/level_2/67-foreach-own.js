/**
 * Iterate over all own properties of an object, running a callback for each one
 */

function foreachOwn(obj, fn) {
  return Object.keys(obj).forEach(key => fn(obj[key], key, obj))
}

foreachOwn({ one: 1, two: 2 }, (v, k, o) => console.log(v, k, o))
