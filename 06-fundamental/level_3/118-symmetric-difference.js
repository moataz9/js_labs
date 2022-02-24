/**
 * get the symmetric difference between two given arrays.
 */

function symmetricDifference(a, b) {
  const s_a = new Set(a)
  const s_b = new Set(b)

  return [...a.filter(x => !s_b.has(x)), ...b.filter(x => !s_a.has(x))]
}

console.log(symmetricDifference([1, 2, 3], [1, 2, 4]))
