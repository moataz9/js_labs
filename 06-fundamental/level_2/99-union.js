/**
 * Get every element that exists in any of the two arrays once
 */

function union(a, b) {
  return Array.from(new Set([...a, ...b]))
}

console.log(union([1, 2, 3], [4, 3, 2]))
console.log(union([1, 2, 3], [1, 2, 3]))
