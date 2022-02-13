/**
 * convert a comma-separated values (CSV) string to a 2D array of objects. The first row of the string is used as the title row.
 */

//#Source https://bit.ly/2neWfJ2
function csvToJson(data, delimiter = ',') {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter)
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter)
      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {})
    })
}

console.log(csvToJson('col1,col2\na,b\nc,d'))
// [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(csvToJson('col1;col2\na;b\nc;d', ';'))
// [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
