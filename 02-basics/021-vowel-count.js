/**
 * count the number of vowels in a given string.
 */

function vowelsCount(str) {
  return str.replace(/[^aeiou]/g, '').length
}

console.log(vowelsCount('Python'))
console.log(vowelsCount('w3resource.com'))
