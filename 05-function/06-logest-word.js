/**
 * Find the longest word within a string
 */

function longestWord(str) {
  let array1 = str.match(/\w[a-z]{0,}/gi)
  let result = array1[0]

  for (let x = 1; x < array1.length; x++) {
    if (result.length < array1[x].length) {
      result = array1[x]
    }
  }

  return result
}

console.log(longestWord('Web Development Tutorial'))
