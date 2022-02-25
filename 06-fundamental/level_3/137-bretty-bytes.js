/**
 * Convert a number in bytes to a human-readable string
 */

function prettyBytes(num, precision = 3, addSpace = true) {
  const UNITS = ['B', 'KB', 'MB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  if (Math.abs(num) < 1) {
    return num + (addSpace ? ' ' : '') + UNITS[0]
  }

  const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1)

  const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision))

  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent]
}

console.log(prettyBytes(1000))
console.log(prettyBytes(-27145424323.5821, 5))
console.log(prettyBytes(123456789, 3, false))
