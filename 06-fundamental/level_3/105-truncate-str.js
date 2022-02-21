/**
 * truncate a string up to a specified length.
 */

function truncateStr(str, num) {
  return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str
}

console.log(truncateStr('boomerang', 7))
