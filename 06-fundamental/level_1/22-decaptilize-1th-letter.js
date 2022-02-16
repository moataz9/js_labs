/**
 * decapitalize the first letter of a string.
 */

function decapitalize([first, ...rest], upperRest = false) {
  return first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''))
}

console.log(decapitalize('W3resource'))
console.log(decapitalize('W3resource', true))
console.log(decapitalize('Red', true))
