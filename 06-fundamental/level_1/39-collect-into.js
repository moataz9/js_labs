/**
 * Change function that accepts an array into a variadic function
 * Note: Given a function, return a closure that collects all inputs into an array-accepting function.
 */

function collectInto(fn) {
  return (...args) => fn(args)
}

const pall = collectInto(Promise.all.bind(Promise))

let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3))

pall(p1, p2, p3).then(console.log)