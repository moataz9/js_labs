/**
 * Return the singular or plural form of the word based on the input number
 */

function pluralize(val, word, plural = word + 's') {
  const _pluralize = (num, word, plural = word + 's') => {
    return [1, -1].includes(Number(num)) ? word : plural
  }
  if (typeof val === 'object') {
    return (num, word) => _pluralize(num, word, val[word])
  }
  return _pluralize(val, word, plural)
}

console.log(pluralize(0, 'apple')) // 'apples'
console.log(pluralize(1, 'apple')) // 'apple'
console.log(pluralize(2, 'apple')) // 'apples'
console.log(pluralize(2, 'person', 'people')) // 'people'

const PLURALS = {
  person: 'people',
  radius: 'radii',
}
const autoPluralize = pluralize(PLURALS)
console.log(autoPluralize(2, 'person')) // 'people'
