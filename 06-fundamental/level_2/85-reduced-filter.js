/**
 * Filter an array of objects based on a condition while also filtering out unspecified keys
 */

function reducedFilter(data, keys, fn) {
  return data.filter(fn).map(el => {
    return keys.reduce((acc, key) => ((acc[key] = el[key]), acc), {})
  })
}

const data = [
  { id: 1, name: 'jhon', age: 24 },
  { id: 2, name: 'mike', age: 22 },
]

console.log(reducedFilter(data, ['id', 'name'], item => item.age > 22))
