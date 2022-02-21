/**
 * Test a value, x, against a predicate function
 */

function when(pred, whenTrue) {
  return x => (pred(x) ? whenTrue(x) : x)
}

const doubleEvenNumbers = when(
  x => x % 2 === 0,
  x => x * 2
)
console.log(doubleEvenNumbers(2))
console.log(doubleEvenNumbers(1))
