/**
 * Get the minimum value of an array, after mapping each element to a value using the provided function
 */

function minBy(arr, fn) {
  return Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]))
}

console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n))
console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'))
