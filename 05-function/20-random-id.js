/**
 * generates a string id (specified length) of random characters.
 * @param {number} len - length of id
 */

function makeId(len) {
  let text = ''
  let char_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < len; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length))
  }
  return text
}

console.log(makeId(18))
console.log(makeId(8))
console.log(makeId(5))
