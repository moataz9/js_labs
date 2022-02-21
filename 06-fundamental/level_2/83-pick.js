/**
 * Pick the key-value pairs corresponding to the given keys from an object
 */

// function pick(obj, arr) {
//   return arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {})
// }

function pick(obj, arr) {
  return arr.reduce((acc, curr) => {
    acc[curr] = curr in obj ? obj[curr] : acc
    return acc
  }, {})
}

console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c']))
