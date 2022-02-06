/**
 * create a new string from a given string changing the position of first and last character
 */

function swap_first_last(str) {
  if (str.length <= 1) return str
  let first_char = str.charAt(0)
  let mid_char = str.slice(1, str.length - 1)
  let last_char = str.charAt(str.length - 1)
  return `${last_char}${mid_char}${first_char}`
}

console.log(swap_first_last('t'))
console.log(swap_first_last('st'))
console.log(swap_first_last('str'))
console.log(swap_first_last('string'))
console.log(swap_first_last('moataz'))
