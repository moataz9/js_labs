/**
 * combine numbers of a given array into an array containing all combinations.
 */

function powerSet(arr) {
  return arr.reduce(
    (acc, curr) => {
      return acc.concat(acc.map(item => [curr].concat(item)))
    },
    [[]]
  )
}

console.log(powerSet([1, 2]))
console.log(powerSet([1, 2, 3]))
console.log(powerSet([1, 2, 3, 4]))
