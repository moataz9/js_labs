/**
 * check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions
 */

function noSameAdjacentLettersCase(str) {
  let is_lower_case = function (symbol) {
    if ('a' <= symbol && symbol <= 'z') {
      return true
    }
    return false
  }

  let is_upper_case = function (symbol) {
    if ('A' <= symbol && symbol <= 'Z') {
      return true
    }
    return false
  }

  let is_first_char_lower = is_lower_case(str[0]),
    is_first_char_upper = is_upper_case(str[0])

  if (!(is_first_char_lower || is_first_char_upper)) {
    return false
  }

  for (let i = 1; i < str.length; i++) {
    if (i % 2) {
      if (
        is_lower_case(str[i]) === is_first_char_lower ||
        is_upper_case(str[i]) === is_first_char_upper
      ) {
        return false
      }
    } else {
      if (
        is_lower_case(str[i]) !== is_first_char_lower ||
        is_upper_case(str[i]) !== is_first_char_upper
      ) {
        return false
      }
    }
  }

  return true
}

console.log(noSameAdjacentLettersCase('xYr'))
console.log(noSameAdjacentLettersCase('XXyx'))
console.log(noSameAdjacentLettersCase('xXyC'))
