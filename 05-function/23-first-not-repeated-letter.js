/**
 * find the first not repeated character.
 * @param {string} str - string to look in
 * @return {string} first letter
 */

function firstNotRepeatedChar(str) {
  let arra1 = str.split('')
  let result = ''
  let ctr = 0

  for (let x = 0; x < arra1.length; x++) {
    ctr = 0

    for (let y = 0; y < arra1.length; y++) {
      if (arra1[x] === arra1[y]) ctr++
    }

    if (ctr < 2) {
      result = arra1[x]
      break
    }
  }
  return result
}

console.log(firstNotRepeatedChar('abacddbec'))
