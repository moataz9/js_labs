/**
 * Returns the most frequent element in an array
 */

function most_frequent(arr) {
  return Object.entries(arr.reduce((a, v) => ((a[v] = a[v] ? a[v] + 1 : 1), a), {})).reduce(
    (a, v) => (v[1] >= a[1] ? v : a),
    [null, 0]
  )[0]
}

console.log(most_frequent(['x', 'y', 'x', 'z', 'x', 'x', 'y']))
