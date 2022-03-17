/**
 * compute the sum of each individual index value from two arrays
 */

function arraysSum(array1, array2) {
  let result = []
  let ctr = 0
  let x = 0

  if (array1.length === 0) return 'array1 is empty'
  if (array2.length === 0) return 'array2 is empty'

  while (ctr < array1.length && ctr < array2.length) {
    result.push(array1[ctr] + array2[ctr])
    ctr++
  }

  if (ctr === array1.length) {
    for (x = ctr; x < array2.length; x++) {
      result.push(array2[x])
    }
  } else {
    for (x = ctr; x < array1.length; x++) {
      result.push(array1[x])
    }
  }
  return result
}

console.log(arraysSum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]))
console.log(arraysSum([], [3, 5, 6, 7, 8, 13]))
console.log(arraysSum([0], [3, 5, 6, 7, 8, 13]))
console.log(arraysSum([2], [3, 5, 6, 7, 8, 13]))
