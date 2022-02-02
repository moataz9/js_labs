/**
 * get n random elements at unique keys from array up to the size of array.
 */

function sampleSize([...arr], n = 1) {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr.slice(0, n)
}

console.log(sampleSize([1, 2, 3]))
console.log(sampleSize([1, 2, 3], 2))
console.log(sampleSize([1, 2, 3], 4))
