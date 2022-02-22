/**
 * uncurry a function up to depth n.
 */

function unCarry(fn, n = 1) {
  return (...args) => {
    const next = acc => args => args.reduce((x, y) => x(y), acc)

    if (n > args.length) throw new RangeError('Argments too few!!')

    return next(fn)(args.slice(0, n))
  }
}

const add = x => y => z => x + y + z
const uncurriedAdd = unCarry(add, 3)

console.log(uncurriedAdd(1, 2, 3))
