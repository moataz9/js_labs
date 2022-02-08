/**
 * find the longest string from a given array of strings
 */

function longestString(str_array) {
  let max = str_array[0].length

  // str_array.forEach(item => (max = Math.max(max, item.length)))
  // or
  str_array.map(item => max = Math.max(max, item.length) )

  result = str_array.filter(item => item.length === max)

  return result
}

console.log(longestString(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']))
