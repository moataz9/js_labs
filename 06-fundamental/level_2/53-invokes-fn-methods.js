/**
 * Create a function that invokes the method at a given key of an object
 */

function invokesFnMethod(context, fn, ...args) {
  return function () {
    return context[fn].apply(context, args.concat(...arguments))
  }
}

const freddy = {
  user: 'fred',
  greet(greeting, punctuation) {
    return `${greeting} ${this.user}${punctuation}`
  },
}

const freddyBound = invokesFnMethod(freddy, 'greet')
console.log(freddyBound('hi', '!'));
