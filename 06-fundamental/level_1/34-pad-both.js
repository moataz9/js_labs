/**
 * pad a string on both sides with the specified character, if it's shorter than the specified length.
 */

function padBoth(str, len, char = ' ') {
  str = str + ''
  return str.padStart((str.length + len) / 2, char).padEnd(len, char)
}

console.log(padBoth('cat', 9, '-'))
console.log(padBoth('42', 8, '0'))
console.log(padBoth(42, 8, '0'))
console.log(padBoth('foobar', 8, '-'))
console.log(padBoth('foobar', 4))
