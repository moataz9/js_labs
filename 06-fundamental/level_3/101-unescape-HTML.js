/**
 * unescape escaped HTML characters.
 */

//#Source https://bit.ly/2neWfJ2
function unescapeHTML(str) {
  return str.replace(
    /&|<|>|'|"/g,
    tag =>
      ({
        '&': '&',
        '<': '<',
        '>': '>',
        "'": "'",
        '"': '"',
      }[tag] || tag)
  )
}

console.log(unescapeHTML('<a href="#">Me & you</a>'))
