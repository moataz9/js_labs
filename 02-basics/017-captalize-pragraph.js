/**
 * Capitalize The First Letter Of Ea undefined undefined Ch Word Of A Given String.
 */
function capitalize_letter(str) {
  let splitStr = str.toLowerCase().split(' ')

  for (let i = 0; i < splitStr.length; i++) {
    // splitStr[i] = splitStr[i][0]?.toUpperCase() + splitStr[i].substring(1)
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  }

  return splitStr.join(' ')
}

console.log(
  capitalize_letter(
    `Write a JavaScript program to capitAlize the first letter of each word of a given string.`
  )
)
