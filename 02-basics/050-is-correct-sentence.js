/**
 * Check whether a given string represents a correct sentence or not
 * sentence starts with Captal letter and ends with .
 */

function isCorrectSentence(input_str) {
  let first_char = input_str[0]
  let last_char = input_str[input_str.length - 1]
  return /[A-Z]/.test(first_char) && last_char == '.'
}

console.log(
  isCorrectSentence('This tool will help you write better English and efficiently corrects texts.')
)
// true
console.log(
  isCorrectSentence('This tool will help you write better English and efficiently corrects texts')
)
// false
console.log(
  isCorrectSentence('this tool will help you write better English and efficiently corrects texts.')
)
// false
