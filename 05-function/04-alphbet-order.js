/**
 * Returns a passed string with letters in alphabetical order
 */

function alphabetOrder(str) {
  return str.split('').sort().join('')
}

console.log(alphabetOrder('webmaster'));