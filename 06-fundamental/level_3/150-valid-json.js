/**
 * Check whether the provided argument is a valid JSON
 */

function isValidJSON(obj) {
  try {
    JSON.parse(obj)
    return true
  } catch (e) {
    // e.message
    return false
  }
}

console.log(isValidJSON('{"name":"Adam","age":20}'))
console.log(isValidJSON('{"name":"Adam",age:"20"}'))
console.log(isValidJSON(null))
