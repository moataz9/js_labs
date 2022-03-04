/**
 * Get the last key that satisfies the provided testing function, otherwise undefined is returned
 */

function findLastKey(obj, fn) {
  return Object.keys(obj)
    .reverse()
    .find(key => fn(obj[key], key, obj))
}

const myobj = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true },
}

console.log(findLastKey(myobj, o => o.active))
