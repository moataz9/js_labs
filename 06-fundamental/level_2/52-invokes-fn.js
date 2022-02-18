/**
 * create a function that invokes fn with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.
 */

function invokesFn(fn, context, ...args) {
  return function () {
    return fn.apply(context, args.concat(...arguments))
  }
}

function greet(greeting, punctuation) {
  return `${greeting} ${this.user}${punctuation}`
}

const freddy = { user: 'Freddy' }
const freddyBound = invokesFn(greet, freddy)

console.log(freddyBound('Hi', '!'))
