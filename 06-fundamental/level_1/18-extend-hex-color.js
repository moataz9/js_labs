/**
 * Extend a 3-digit color code to a 6-digit color code
 */

function extendHex(shortHex) {
  return (
    '#' +
    shortHex
      .slice(shortHex.startsWith('#') ? 1 : 0)
      .split('')
      .map(x => x + x)
      .join('')
  )
}

console.log(extendHex('#03f'))
console.log(extendHex('05a'))
