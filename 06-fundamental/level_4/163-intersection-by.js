/**
 * Get a list of elements that exist in both arrays, after applying the provided function to each array element of both
 */

function intersectionBy(a, b, fn) {
  const s = new Set(b.map(x => fn(x)));
  return a.filter(x => s.has(fn(x)));
}

console.log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));
