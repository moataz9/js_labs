/**
 * Sum of squares of a numeric vector
 */

function sum_square(array) {
  let sum = 0
  let len = array.length

  while (len--) sum += array[len] ** 2

  return sum
}

console.log(sum_square([0, 1, 2, 3, 4]))
