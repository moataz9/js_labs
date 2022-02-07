/**
 * check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
 */

function check_3_characters_between_a_b(str) {
  return /a...b/.test(str) || /b...a/.test(str)
}

console.log(check_3_characters_between_a_b('Chainsbreak'));
console.log(check_3_characters_between_a_b('pane borrowed'));
console.log(check_3_characters_between_a_b('abCheck'));
