/**
 * Find a perfect number
 **Note: According to Wikipedia : 
 * In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors,
 * that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
 * Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
 */

function isPerfectNumber(number) {
  let temp = 0
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i
    }
  }

  if (temp === number && temp !== 0) {
    return 'It is a perfect number.'
  } else {
    return 'It is not a perfect number.'
  }
}

console.log('isPerfectNumber(6): %o', isPerfectNumber(6))
console.log('isPerfectNumber(28): %o', isPerfectNumber(28))
console.log('isPerfectNumber(496): %o', isPerfectNumber(496))
console.log('isPerfectNumber(8128): %o', isPerfectNumber(8128))
console.log('isPerfectNumber(23): %o', isPerfectNumber(23))
console.log('isPerfectNumber(25): %o', isPerfectNumber(25))
