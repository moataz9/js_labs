/**
 * Number of occurrences of each letter in specified string
 * @param {string} str
 */

function charCount(str) {
  let unique_char = {}

  str.replace(/\S/g, l => {
    unique_char[l] = isNaN(unique_char[l]) ? 1 : unique_char[l] + 1
  })

  return unique_char;
}

console.log(charCount('str the params'));