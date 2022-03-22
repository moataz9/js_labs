/**
 * Create an array of elements,
 * ungrouping the elements in an array produced by zip and applying the provided function
 */

function unzipWith(arr, fn) {
  return arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({ length: Math.max(...arr.map(x => x.length)) }).map(x => [])
    )
    .map(val => fn(...val))
}

console.log(
  unzipWith(
    [
      [1, 10, 100],
      [2, 20, 200],
    ],
    (...args) => args.reduce((acc, v) => acc + v, 0)
  )
)
