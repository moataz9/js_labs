/**
 * Counts the number of vowels within a string
 */

function vowelsCount(str) {
  let vowels = 'aeiouAEIOU'
  let vcount = 0

  for (let i = 0; i < vowels.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) vcount++
  }

  return vcount
}

console.log(vowelsCount('lorem ipsum doller set, The quick brown fox'))
