/**
 * find the maximum number from a given positive integer by deleting exactly one digit of the given number.
 */

function maxNumberAfterDeletingOneDigit(num) {
  let result = 0
  let num_digits = []

  while (num) {
    num_digits.push(num % 10)
    num = Math.floor(num / 10)
  }

  for (let index_num = 0; index_num < num_digits.length; index_num++) {
    let n = 0
    for (let i = num_digits.length - 1; i >= 0; i--) {
      if (i !== index_num) {
        n = n * 10 + num_digits[i]
      }
    }
    result = Math.max(n, result)
  }

  return result
}

console.log(maxNumberAfterDeletingOneDigit(100))
console.log(maxNumberAfterDeletingOneDigit(10))
console.log(maxNumberAfterDeletingOneDigit(1245))
console.log(maxNumberAfterDeletingOneDigit(22145))
