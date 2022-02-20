/**
 * Take any number of iterable objects or objects with a length property and returns the longest one
 */

function longestItem(...vals) {
  return [...vals].sort((a, b) => b.length - a.length)[0]
}

console.log(longestItem('this', 'a', 'is', 'testCase'))
console.log(longestItem(...['a', 'ab', 'abc']))
console.log(longestItem(...['a', 'ab', 'abc'], 'abcd'))
console.log(longestItem(['a', 'ab', 'abc'], [1, 3, 2, 4, 5], [2, 4, 6, 8]))
console.log(longestItem(['a', 'ab', 'abc'], [1, 3, 2, 4, 5, 7, 6], 'footer'))
