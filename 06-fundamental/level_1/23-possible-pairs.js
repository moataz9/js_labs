/**
 * create a new array out of the two supplied by creating each possible pair from the arrays.
 */

function possiblePairs(arr1, arr2) {
  return arr1.reduce((acc, x) => acc.concat(arr2.map(y => [x, y])), [])
}

console.log(possiblePairs([1, 2], ['a', 'b']))
console.log(possiblePairs([1, 2], [1, 2]))
console.log(possiblePairs(['a', 'b'], ['a', 'b']))
