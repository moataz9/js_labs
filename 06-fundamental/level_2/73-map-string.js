/**
 * Create a new string with the results of calling a provided function on every character in the calling string.
 */

function mapString(str, fn) {
  return str
    .split('')
    .map((v, i) => fn(v, i, str))
    .join('')
}

console.log(mapString('javascript excercise', c => c.toUpperCase()))