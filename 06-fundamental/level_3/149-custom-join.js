/**
 * Join all elements of an array into a string and returns this string
 */

function join(arr, separator = ',', end = separator) {
  return arr.reduce((acc, val, i) => {
    // i === arr.length - 2 ? acc + val + end : i === arr.length - 1 ? acc + val : acc + val + separator
    if (i === arr.length - 2) {
      return acc + val + end
    } else if (i === arr.length - 1) {
      return acc + val
    }
    return acc + val + separator
  }, '')
}

console.log(join(['pen', 'pineapple', 'apple', 'pen'], ',', '&'))
console.log(join(['pen', 'pineapple', 'apple'], ',', '&'))
console.log(join(['pen', 'pineapple'], ',', '&'))
console.log(join(['pen'], ',', '&'))
