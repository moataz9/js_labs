/**
 * Parse a HTTP Cookie header string and return an object of all cookie name-value pairs
 */

function parseCookie(str) {
  return str
    .split(';')
    .map(v => v.split('='))
    .reduce(
      (acc, v) => ((acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())), acc),
      {}
    )
}

console.log(parseCookie('foo=bar; equation=E%3Dmc%5E2'));
