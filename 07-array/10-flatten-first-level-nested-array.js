/**
 * flatten first level nested array
 */

function flatten(a, shallow, r) {
  r = r ? r : []

  if (shallow) {
    return r.concat.apply(r, a)
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i].constructor == Array) {
      flatten(a[i], shallow, r)
    } else {
      r.push(a[i])
    }
  }
  return r
}

console.log(flatten([1, [2], [3, [[4]]], [5, 6]]))

console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true))
