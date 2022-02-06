/**
 * remove a character from a given string and return the new string
 */

function remove_character(str, char) {
  return str.split(char).join('')
}

console.log(remove_character('moataz samir', 'a'))
console.log(remove_character('moataz samir', 'i'))
