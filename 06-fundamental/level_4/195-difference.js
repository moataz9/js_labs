/**
 * Get the difference between two given arrays
 */

function difference(a, b) {
  const s = new Set(b)
  return a.filter(x => !s.has(x))
}

console.log(difference([1, 2, 3], [1, 2, 4]))
console.log(difference([1, 2, 4], [1, 2, 3]))
console.log(difference([1, 2, 55], [1, 2, 3]))
