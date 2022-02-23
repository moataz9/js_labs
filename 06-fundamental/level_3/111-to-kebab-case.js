/**
 * convert a string to kebab case.
 */

function toKebabCase(str) {
  return (
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('-')
  )
}

console.log(toKebabCase('camelCase'))
console.log(toKebabCase('some text'))
console.log(toKebabCase('some-mixed_string With spaces_underscores-and-hyphens'))
console.log(toKebabCase('AllThe-small Things'))
console.log(
  toKebabCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML')
)
