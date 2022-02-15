/**
 * Filter out the specified values from a specified array.
 */

function filterOut(arr, ...args) {
  let argState = Array.isArray(args[0]) ? args[0] : args
  return arr.filter(v => !argState.includes(v))
}

let array1 = ['a', 'b', 'c', 'd', 'a', 'b', 'c']
console.log(filterOut(array1, 'a', 'b'))
console.log(filterOut(array1, ['a', 'b']))
