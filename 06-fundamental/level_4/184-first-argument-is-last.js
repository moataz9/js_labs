/**
 * Takes a function as an argument, then makes the first argument the last
 */

function flip(fn) {
  return (first, ...rest) => fn(...rest, first)
}

let a = { name: 'John Smith' }
let b = {}
const mergeFrom = flip(Object.assign)
let mergePerson = mergeFrom.bind(null, a)
console.log(mergePerson(b)); // == b
b = {}
console.log(Object.assign(b, a)) // == b
