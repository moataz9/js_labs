/**
 * sort the characters in a string alphabetically.
 */

function sortCharactersInString(str) {
  return [...str].sort((a, b) => a.localeCompare(b)).join('')
}

console.log(sortCharactersInString('moataz samir'))
