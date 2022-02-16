/**
 * return true if the string is y/yes or false if the string is n/no.
 */

function yesNo(val, def = false) {
  return /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def
}

console.log(yesNo('Y'))
console.log(yesNo('yes'))
console.log(yesNo('Yes'))
console.log(yesNo('No'))
console.log(yesNo('Foo'))
console.log(yesNo('Foo', true))
