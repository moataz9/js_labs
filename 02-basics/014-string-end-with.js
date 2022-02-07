/**
 * check whether a string ends with spacific character/s and false otherwise.
 */

function str_end_with(str, end_with) {
  return str.endsWith(end_with)
}

console.log(str_end_with('JavaScript', 'Script'))
console.log(str_end_with('TypeScript', 'Script'))
console.log(str_end_with('CoffeeScript', 'Script'))
