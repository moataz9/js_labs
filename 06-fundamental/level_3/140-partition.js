/**
 * group the elements into two arrays, depending on the provided function's truthiness for each element.
 */

function partition(arr, fn) {
  return arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val)
      return acc
    },
    [[], []]
  )
}

const users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
  { user: 'shad', age: 20, active: true },
]
console.log(partition(users, o => o.active))
