/**
 * remove elements from an array for which the given function returns false.
 */

// function remove(arr, func) {
//   return Array.isArray(arr)
//     ? arr.filter(func).reduce((acc, val) => {
//         arr.splice(arr.indexOf(val), 1)
//         return acc.concat(val)
//       }, [])
//     : []
// }
function remove(arr, func) {
  if (Array.isArray(arr)) {
    return arr.filter(func).reduce((acc, val) => {
      arr.splice(arr.indexOf(val), 1)
      return acc.concat(val)
    }, [])
  }
  return []
}

console.log(remove([1, 2, 3, 4], n => n % 2 === 0))
console.log(remove([1, 2, 3, 4], n => n % 2 !== 0))
