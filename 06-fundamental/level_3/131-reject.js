/**
 * Takes a predicate and array, like Array.filter(), but only keeps x if pred(x) returns false
 */

function reject(pred, arr) {
  return arr.filter((...args) => !pred(...args))
}

console.log(reject(x => x % 2 === 0, [1, 2, 3, 4, 5]))
console.log(reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']))
