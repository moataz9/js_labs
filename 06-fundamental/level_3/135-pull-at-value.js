/**
 * Mutate the original array to filter out the values specified.
 * @return the removed elements.
 */

function pullAtValue(arr, pullArr) {
  let removed = []
  arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v))
  return removed
}

let myArray = ['a', 'b', 'c', 'd']
console.log(myArray)
console.log(pullAtValue(myArray, ['b', 'd']))
