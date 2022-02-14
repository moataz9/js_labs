/**
 * Capitalize the first letter of a string
 */

function capitalize([first, ...rest], lowerRest = false) {
  return first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''))
}

console.log(capitalize('fooBar'))
console.log(capitalize('fooBar', true))
