/**
 * create a new string from a given string, removing the first and last characters of the string if spcified at second parameter.
 * Return the original string if the condition is not satisfied.
 */

function noCharAtStartOrEnd(str, char) {
  str = str.toLowerCase()
  char = char.toLowerCase()

  let start_pos = 0
  let end_pos = str.length

  if (str.length > 0 && str.charAt(0) == char) {
    start_pos = 1
  }

  if (str.length > 1 && str.charAt(str.length - 1) == char) {
    end_pos--
  }

  return str.substring(start_pos, end_pos)
}

console.log(noCharAtStartOrEnd('PythonP', 'p'))
console.log(noCharAtStartOrEnd('Python', 'p'))
console.log(noCharAtStartOrEnd('JavaScript', 'j'))
