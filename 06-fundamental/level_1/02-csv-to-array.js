/**
 * converts a comma-separated values (CSV) string to a 2D array.
 */

function csvToArray(data, delimiter = ',', omitFirstRow = false) {
  return data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter))
}

console.log(csvToArray('a,b\nc,d'))
// [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(csvToArray('a;b\nc;d', ';'))
// [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(csvToArray('head1,head2\na,b\nc,d', ',', true))
// [ [ 'a', 'b' ], [ 'c', 'd' ] ]