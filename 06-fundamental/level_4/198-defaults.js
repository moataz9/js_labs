/**
 * Assigns default values for all properties in an object that are undefined
 */

function defaults(obj, ...defs) {
  return Object.assign({}, obj, ...defs.reverse(), obj)
}

console.log(defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }))
