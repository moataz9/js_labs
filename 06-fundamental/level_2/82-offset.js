/**
 * Move the n elements to the end of the array
 */

const offset = (arr, n) => [...arr.slice(n), ...arr.slice(0, n)]

console.log(offset([1, 2, 3, 4, 5], 2))
console.log(offset([1, 2, 3, 4, 5], -2))
