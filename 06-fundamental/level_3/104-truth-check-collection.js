/**
 * Check if the predicate is truthy on all elements of a collection
 */

function truthCheckCollection(collection, pre) {
  return collection.every(obj => obj[pre])
}

const collection = [
  { user: 'Tinky-Winky', sex: 'male' },
  { user: 'Dipsy', sex: 'male' },
]

console.log(truthCheckCollection(collection, 'sex'))
