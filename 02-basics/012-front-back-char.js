/**
 * create a new string from a given string with the first character of the given string added at the front and back.
 */

function front_back(str) {
  let first = str.substring(0, 1)
  // or
  // first = str.charAt(0)
  return `${first}${str}${first}`
}

console.log(front_back('a'))
console.log(front_back('str'))
console.log(front_back('string'))
