/**
 * Letter count within a string
 * @param {string} str - string to look in
 * @param {string} letter - spacific letter to count in String
 * @return {number} letter count in the string
 */

function charCount(str, letter) {
  let letter_Count = 0
  for (let position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) letter_Count++
  }
  return letter_Count
}

console.log(charCount('w3resource.com', 'o'))
