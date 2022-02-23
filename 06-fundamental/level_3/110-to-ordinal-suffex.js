/**
 * Add an ordinal suffix to a number
 */

function toOrdinalSuffix(num) {
  const int = parseInt(num)
  const digits = [int % 10, int % 100]
  const ordinals = ['st', 'nd', 'rd', 'th']
  const oPattern = [1, 2, 3, 4]
  const tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19]

  if (oPattern.includes(digits[0]) && !tPattern.includes(digits[1])) {
    return int + ordinals[digits[0] - 1]
  } else {
    return int + ordinals[3]
  }
}

console.log(toOrdinalSuffix('1'))
console.log(toOrdinalSuffix('4'))
console.log(toOrdinalSuffix('50'))
console.log(toOrdinalSuffix('123'))
