/**
 * check from two given integers, whether one is positive and another one is negative.
 */

function pos_neg(num1, num2) {
  return (num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0) ? true : false
}

console.log(pos_neg(20, 20))
console.log(pos_neg(20, -20))
console.log(pos_neg(-20, -20))
console.log(pos_neg(-20, 20))
