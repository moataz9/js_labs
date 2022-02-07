/**
 * convert the letters of a given string  in alphabetical order.
 */

function alphabetSort(str) {
  return str.split('').sort().join('')
}

console.log(alphabetSort('Python'))
console.log(alphabetSort('Exercises'))
