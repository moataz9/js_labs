/**
 * Get the sum of a given array using the provided function.
 */

function sumBy(arr, fn) {
  return arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0)
}

console.log(sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n))
console.log(sumBy([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], 'n'))
