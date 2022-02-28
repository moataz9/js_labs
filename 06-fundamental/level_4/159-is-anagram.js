/**
 * Check if a given string is an anagram of another string (case-insensitive, ignores spaces, punctuation and special characters)
 */

function isAnagram(str1, str2) {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('')
  return normalize(str1) === normalize(str2)
}

console.log(isAnagram('iceman', 'cinema')) // true
console.log(isAnagram('madam', 'madam')) // true
