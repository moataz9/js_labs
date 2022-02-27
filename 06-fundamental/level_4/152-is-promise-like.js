/**
 * Return true if an object looks like a Promise, false otherwise
 */

function isPromiseLike(obj) {
  return (
    obj !== null &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  )
}

console.log(
  isPromiseLike({
    then: function () {
      return ''
    },
  })
)
console.log(
  isPromiseLike({
    then() {
      return ''
    },
  })
)
console.log(isPromiseLike(null))
console.log(isPromiseLike({}))
