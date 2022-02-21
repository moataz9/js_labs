/**
 * get all unique values of an array, based on a provided comparator function.
 */

function uniqueElementBy(arr, fn) {
  return arr.reduce((acc, val) => (!acc.some(x => fn(val, x)) && acc.push(val), acc), [])
}

const data = [
  { id: 0, value: 'a' },
  { id: 1, value: 'b' },
  { id: 2, value: 'c' },
  { id: 1, value: 'd' },
  { id: 0, value: 'e' },
]

console.log(uniqueElementBy(data, (a, b) => a.id === b.id))
