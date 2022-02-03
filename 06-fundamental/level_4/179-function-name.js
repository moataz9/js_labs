/**
 * Log the name of a function
 */

function functionName(fn) {
  return console.debug(fn.name), fn
}
console.log(functionName(Math.max))
