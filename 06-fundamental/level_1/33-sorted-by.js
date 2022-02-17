/**
 * get a sorted array of objects ordered by properties and orders.
 */

function orderBy(arr, props, orders) {
  return [...arr].sort((a, b) => {
    return props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]]
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0
      }
      return acc
    }, 0)
  })
}

const users = [
  { name: 'fred', age: 48 },
  { name: 'barney', age: 36 },
  { name: 'fraday', age: 40 },
]

console.time('e');
console.log(orderBy(users, ['name', 'age'], ['desc','asc']))
console.log(orderBy(users, ['age'], ['asc']))
console.log(orderBy(users, ['age'], ['desc']))
console.timeEnd('e');
