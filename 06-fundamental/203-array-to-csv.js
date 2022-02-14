/**
 * convert a 2D array to a comma-separated values (CSV) string.
 */

function arrayToCSV(arr, delimiter = ',') {
  return arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n')
}

const arr = [
  ['a', 'b'],
  ['c', 'd'],
]
console.log(arrayToCSV(arr))
console.log('=======')
console.log(arrayToCSV(arr, ';'))
