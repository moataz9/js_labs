/**
 * Return true if the given string is an absolute URL, false otherwise
 */

function isAbsoluteURL(str) {
  return /^[a-z][a-z0-9+.-]*:/.test(str)
}

console.log(isAbsoluteURL('https://google.com')) // true
console.log(isAbsoluteURL('ftp://www.myserver.net')) // true
console.log(isAbsoluteURL('/foo/bar')) // false
