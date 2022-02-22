/**
 * create a function that accepts up to one argument, ignoring any additional
 */

const unary = fn => val => fn(val)

console.log(['5', '6', '9'].map(unary(parseInt)))

