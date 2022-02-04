/**
 * sort an array of objects, ordered by a property, based on the array of orders provided.
 */

function orderWith(arr, prop, order) {
  const orderValues = order.reduce((acc, v, i) => {
    acc[v] = i
    return acc
  }, {})

  return [...arr].sort((a, b) => {
    if (orderValues[a[prop]] === undefined) return 1
    if (orderValues[b[prop]] === undefined) return -1
    return orderValues[a[prop]] - orderValues[b[prop]]
  })
}

const users = [
  { name: 'fred', language: 'JS' },
  { name: 'barney', language: 'TS' },
  { name: 'frannie', language: 'JS' },
  { name: 'anna', language: 'JAVA' },
  { name: 'jimmy' },
  { name: 'nicky', language: 'PYTHON' },
]

console.log(orderWith(users, 'language', ['PYTHON', 'TS', 'JAVA']))
console.log(orderWith(users, 'name', ['']))
