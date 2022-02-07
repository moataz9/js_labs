/**
 * replace every character in a given string with the character following it in the alphabet order.
 */

// method 1
function letterChanges(text) {
  let s = text.split('')
  for (let i = 0; i < s.length; i++) {
    // Caesar cipher
    switch (s[i]) {
      case ' ':
        break
      case 'z':
        s[i] = 'a'
        break
      case 'Z':
        s[i] = 'A'
        break
      default:
        s[i] = String.fromCharCode(1 + s[i].charCodeAt(0))
    }

    // Upper-case vowels
    switch (s[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        s[i] = s[i].toUpperCase()
    }
  }
  return s.join('')
}

// method 2
function alphabetCharShift(str) {
  let all_chars = str.split('')

  for (let i = 0; i < all_chars.length; i++) {
    let n = all_chars[i].charCodeAt() - 'a'.charCodeAt()
    n = (n + 1) % 26
    all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt())
  }

  return all_chars.join('')
}

console.log(letterChanges('PYTHON'))
console.log(letterChanges('W3R'))
console.log(letterChanges('php'))
console.log(letterChanges('`dhnt'))
console.log(letterChanges('abcdxyz'))
console.log('======================================')
console.log(alphabetCharShift('abcdxyz'))
