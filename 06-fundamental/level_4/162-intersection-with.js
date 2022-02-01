/**
 * Get a list of elements that exist in both arrays, using a provided comparator function
 */

function intersectionWith(a, b, comp) {
  return a.filter(x => b.findIndex(y => comp(x, y)) !== -1)
}

console.log(
  intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b))
)
