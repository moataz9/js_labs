/**
 * remove a character at the specified position of a given string and return the new string
 */

// method 1
function remove_character_1(str, char_pos) {
  let part1 = str.substring(0, char_pos)
  let part2 = str.substring(char_pos + 1)
  return `${part1}${part2}`
}

// method 2
function remove_character_2(str, char_pos) {
  let part1 = str.slice(0, char_pos)
  let part2 = str.slice(char_pos + 1)
  return `${part1}${part2}`
}

console.log(remove_character_1('moataz samir', 2))
console.log(remove_character_2('moataz samir', 2))
