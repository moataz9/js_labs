/**
 * Get all unique values (form the right side of the array) of an array, based on a provided comparator function.
 */

function uniqueElementsByRight(arr, fn) {
  return arr.reduceRight((acc, val) => {
    if (!acc.some(x => fn(val, x))) acc.push(val)
    return acc
  }, [])
}

const data = [
  { id: 0, value: 'a' },
  { id: 1, value: 'b' },
  { id: 2, value: 'c' },
  { id: 1, value: 'd' },
  { id: 0, value: 'e' },
]

console.log(uniqueElementsByRight(data, (a, b) => a.id === b.id))
