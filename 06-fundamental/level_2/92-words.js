/**
 * Convert a given string into an array of words.
 */

function words(str, pattern = /[^a-z]+/i) {
  return str.split(pattern).filter(Boolean)
}

console.log(words('I Love JavaScript!!'))
console.log(words('python, java, php'))
console.log(words('python + java + php'))
