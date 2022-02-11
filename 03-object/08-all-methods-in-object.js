/**
 * display all methods in a object.
 */

// code finds methods only
function FindAllMethods(obj) {
  return Object.getOwnPropertyNames(obj).filter(property => typeof obj[property] == 'function')
}
console.log('All Methods of Math:\n', FindAllMethods(Math))
console.log('All Methods of Array:\n', FindAllMethods(Array))

// code finds both properties and methods
function allProperties(obj) {
  return Object.getOwnPropertyNames(obj)
}

console.log('All Properties of Math:\n', allProperties(Math))
console.log('All Properties of Array:\n', allProperties(Array))
