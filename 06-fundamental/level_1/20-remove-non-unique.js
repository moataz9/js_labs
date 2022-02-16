/**
 * filter out the non-unique values in an array.
 */

const removeNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))

console.log(removeNonUnique([1, 2, 2, 3, 4, 4, 5]))
console.log(removeNonUnique([1, 2, 5, 4, 3]))
