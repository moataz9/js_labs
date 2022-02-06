/**
 * create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
 */

function checkPythonString(str1) {
  let firstTwoCharacters = str1?.substring(0, 2).toLowerCase()
  return str1 === null || str1 === undefined || firstTwoCharacters === 'py' ? str1 : `Py${str1}`
}

console.log(checkPythonString('Python'))
console.log(checkPythonString('PYthon'))
console.log(checkPythonString('python'))
console.log(checkPythonString('thon'))
console.log(checkPythonString(' i don\'t know'))
console.log(checkPythonString(''))
console.log(checkPythonString(undefined))
console.log(checkPythonString(null))
