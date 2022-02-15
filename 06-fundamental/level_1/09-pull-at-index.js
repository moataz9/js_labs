/**
 * Extract out the values at the specified indexes from a specified array
 */

function pullAtIndex(items, pullArr) {
  let removed = []
  items
    .map((item, index) => {
      return pullArr.includes(index) ? removed.push(item) : item
    })
    .filter((item, index) => !pullArr.includes(index))
  return removed
}

let arra1 = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(pullAtIndex(arra1, [1, 3, 5]))

let arra2 = [1, 2, 3, 4, 5, 6, 7]
console.log(pullAtIndex(arra2, [4]))
