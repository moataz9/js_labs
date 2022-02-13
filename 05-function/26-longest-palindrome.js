/**
 * returns the longest palindrome in a given string
 */
function isPalindrome(str1) {
  let rev = str1.split('').reverse().join('')
  return str1 == rev
}

function longestPalindrome(str1) {
  let max_length = 0
  let maxp = ''

  for (let i = 0; i < str1.length; i++) {
    let subs = str1.substring(i, str1.length)

    for (let j = subs.length; j >= 0; j--) {
      let sub_subs_str = subs.substr(0, j)
      if (sub_subs_str.length <= 1) continue

      if (isPalindrome(sub_subs_str)) {
        if (sub_subs_str.length > max_length) {
          max_length = sub_subs_str.length
          maxp = sub_subs_str
        }
      }
    }
  }

  return maxp
}

console.log(longestPalindrome('abracadabra')) //aca
console.log(longestPalindrome('HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE')) // 12345678987654321
