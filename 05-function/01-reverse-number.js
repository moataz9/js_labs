/**
 * reverse a number
 */

function reverseNumber(num) {
  num = String(num)
  return num.split('').reverse().join('')
}

console.log(Number(reverseNumber(32214)))
