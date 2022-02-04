/**
 *
 */

function fromCamelCase(str, separator = '_') {
  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase()
}

console.log(fromCamelCase('someDatabaseFieldName', ' '))
console.log(fromCamelCase('someLabelThatNeedsToBeCamelized', '-'))
console.log(fromCamelCase('someJavascriptProperty', '_'))
console.log(fromCamelCase('someJavascriptProperty'))
