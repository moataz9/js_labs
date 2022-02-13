/**
 * extract unique characters from a string.
 * @param {string} str - input string
 */

function unique_char(str) {
  let uniql = ''

  for (let x = 0; x < str.length; x++) {
    if (uniql.indexOf(str.charAt(x)) == -1) {
      uniql += str[x]
    }
  }

  return uniql
}

console.log(unique_char('thequickbrownfoxjumpsoverthelazydog'))
