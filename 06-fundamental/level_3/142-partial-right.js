/**
 * Create a function that invokes fn with partials appended to the arguments it receives
 */

function partialRight(fn, ...partial) {
  return (...args) => fn(...args, ...partial)
}

const greet = (greeting, name) => `${greeting} ${name}`
const greetJhon = partialRight(greet, 'Jhon')
console.log(greetJhon('Hello'))
