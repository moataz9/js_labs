/**
 * Implement the Luhn Algorithm used to validate a variety of identification numbers
 */

function luhnCheck(num) {
  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x))

  let lastDigit = arr.splice(0, 1)[0]

  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0)

  sum += lastDigit

  return sum % 10 === 0
}

console.log(luhnCheck('4485275742308327'))
console.log(luhnCheck(4485275742308327))
console.log(luhnCheck(4485275742308328))
console.log(luhnCheck('1576485952459874'))
console.log(luhnCheck(154896578))
console.log(luhnCheck(1548965788))
console.log(luhnCheck(15489261478))
