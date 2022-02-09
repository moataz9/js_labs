/**
 * find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it.
 */

function buildPalindrome(new_str) {
  let flag

  for (let i = new_str.length; ; i++) {
    flag = true
    for (let j = 0; j < i - j - 1; j++) {
      if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
        flag = false
        break
      }
    }
    if (flag) {
      for (let j = new_str.length; j < i; j++) {
        new_str += new_str[i - j - 1]
      }
      return new_str
    }
  }
}

console.log(buildPalindrome('abcddc'))
console.log(buildPalindrome('1223'))
