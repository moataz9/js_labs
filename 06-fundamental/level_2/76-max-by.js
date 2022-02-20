/**
 * Get the maximum value of an array, after mapping each element to a value using the provided function
 */

function maxBy(arr, fn) {
  return Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]))
}

console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n))
console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'))
