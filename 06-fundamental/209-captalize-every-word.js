/**
 * capitalize the first letter of every word in a string.
 */

function capitalizeEveryWord(str) {
  return str.replace(/\b[a-z]/g, char => char.toUpperCase())
}

console.log(capitalizeEveryWord('hello world!'))
