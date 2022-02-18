/**
 * curry a function
 */

const curry = (fn, arity,...args) => {
  arity = arity ? arity : fn.length
  return arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)
}

console.log(curry(Math.pow)(2)(8))
console.log(curry(Math.min, 3)(10)(50)(2))
console.log(curry(Math.min, 3)(10)(50)(4))
console.log(curry(Math.max, 4)(10)(50)(4)(100))
// console.log(curry.length);