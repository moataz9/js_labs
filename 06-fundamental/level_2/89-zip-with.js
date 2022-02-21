/**
 * Create an array of elements,
 * grouped based on the position in the original arrays and using function
 * as the last value to specify how grouped values should be combined
 */

function zipWith(...array) {
  const fn = typeof array[array.length - 1] === 'function' ? array.pop() : undefined

  return Array.from({ length: Math.max(...array.map(a => a.length)) }, (_, i) =>
    fn ? fn(...array.map(a => a[i])) : array.map(a => a[i])
  )
}

console.log(zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c)) // [111,222]

console.log(
  zipWith(
    [1, 2, 3],
    [10, 20],
    [100, 200],
    (a, b, c) => (a != null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c')
  )
)
