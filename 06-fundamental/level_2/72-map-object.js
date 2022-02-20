/**
 * Map the values of an array to an object using a function
 */

// function mapObject(arr, fn) {
//   return (a => (
//     (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
//   ))()
// }

function mapObject(arr, fn) {
  let mappedArr = arr.map(fn)
  return arr.reduce((acc, val, i) => {
    acc[val] = mappedArr[i]
    return acc
  }, {})
}

const squareIt = arr => mapObject(arr, a => a * a)
console.log(squareIt([1, 2, 3]))

console.log(mapObject([1, 2, 3, 4, 5], item => item ** 2))
