/**
 * Group the elements of an array based on the given function and returns the count of elements in each group
 */

function countGroupBy(arr, fn) {
  return arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})
}

console.log(countGroupBy([6, 10, 100, 10], Math.sqrt))
console.log(countGroupBy([6.1, 4.2, 6.3], Math.floor))
console.log(countGroupBy(['one', 'two', 'three'], 'length'))
