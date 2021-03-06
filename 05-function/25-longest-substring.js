/**
 * Find longest substring in a given string without repeating characters
 */

function longestSubstringWithoutRepeatingCharacters(input) {
  let chars = input.split('')
  let curr_char
  let str = ''
  let longest_string = ''
  let hash = {}

  for (let i = 0; i < chars.length; i++) {
    curr_char = chars[i]
    if (!hash[chars[i]]) {
      str += curr_char
      hash[chars[i]] = { index: i }
    } else {
      if (longest_string.length <= str.length) longest_string = str

      let prev_dupeIndex = hash[curr_char].index
      let str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i)

      str = str_FromPrevDupe + curr_char
      hash = {}

      for (let j = prev_dupeIndex + 1; j <= i; j++) {
        hash[input.charAt(j)] = { index: j }
      }
    }
  }

  return longest_string.length > str.length ? longest_string : str
}

console.log(longestSubstringWithoutRepeatingCharacters('google.com'))
console.log(longestSubstringWithoutRepeatingCharacters('example.com'))
