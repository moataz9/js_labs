/**
 * create an object from the given key-value pairs.
 */

function objectFromPairs(arr) {
  return arr.reduce((acc, val) => {
    acc[val[0]] = val[1]
    return acc
  }, {})
}

console.log(
  objectFromPairs([
    ['a', 1],
    ['b', 2],
  ])
)
console.log(
  objectFromPairs([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ])
)
