/**
 * Iterate over a callback n times
 */

function times(n, fn, context = undefined) {
  let i = 0

  while (fn.call(context, i) !== false && ++i < n) {}
}

let output = ''
times(5, i => (output += i))
console.log(output)
