/**
 * Convert an array of objects to a comma-separated values string that contains only the columns specified.
 */

function jsonToCsv(arr, columns, delimiter = ',') {
  return [
    columns.join(delimiter),
    ...arr.map(obj => {
      return columns.reduce((acc, key) => {
        return `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`
      }, '')
    }),
  ].join('\n')
}

console.log(
  jsonToCsv(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ['x', 'y']
  )
)
// x,y
// "100","200"
// "300","400"
// "6",""
// "","7"
console.log('===========');
console.log(
  jsonToCsv(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ['x', 'y'],
    ';'
  )
)
// x;y
// "100";"200"
// "300";"400"
// "6";""
// "";"7"