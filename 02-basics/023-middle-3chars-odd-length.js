/**
 * create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.
 */

function middleThree(str) {
  if (str.length % 2 !== 0) {
    mid = (str.length + 1) / 2
    return str.slice(mid - 2, mid + 1)
  }
  return str
}

console.log(middleThree('abcdefg'))
console.log(middleThree('HTML5'))
console.log(middleThree('Python'))
console.log(middleThree('PHP'))
console.log(middleThree('Exercises'))
