/**
 * find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.
 */

function numberOfTimesUntilOneDigit(num) {
  let digitSum = function (num) {
    let digit_sum = 0
    while (num) {
      digit_sum += num % 10
      num = Math.floor(num / 10)
    }

    return digit_sum
  }

  let result = 0

  while (num >= 10) {
    result += 1
    num = digitSum(num)
  }

  return result
}

console.log(numberOfTimesUntilOneDigit(123))
console.log(numberOfTimesUntilOneDigit(156))
console.log(numberOfTimesUntilOneDigit(94555))
