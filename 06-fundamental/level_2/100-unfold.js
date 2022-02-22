/**
 * Build an array, using an iterator function and an initial seed value
 */

function unfold(fn, seed) {
  let result = []
  let val = [null, seed]

  while ((val = fn(val[1]))) {
    result.push(val[0])
  }

  return result
}

let fn = n => (n > 50 ? false : [-n, n + 10])
console.log(unfold(fn, 10));
