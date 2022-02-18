/**
 * Compute the average of an array, after mapping each element to a value using the provided function
 */

function averageBy(arr, fn) {
  return (
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
    arr.length
  )
}

console.log(averageBy([{ a: 40 }, { a: 30 }, { a: 20 }], o => o.a)) // (40 + 30 + 20) / 3 = 30
console.log(averageBy([{ a: 40 }, { a: 30 }, { a: 20 }], 'a')) // (40 + 30 + 20) / 3 = 30 
