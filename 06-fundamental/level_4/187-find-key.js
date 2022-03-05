/**
 * Get the first key that satisfies the provided testing function
 */

function findKey(obj, fn) {
  return Object.keys(obj).find(key => fn(obj[key], key, obj))
}

const myobj = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true },
}

console.log(findKey(myobj, o => o.active))
