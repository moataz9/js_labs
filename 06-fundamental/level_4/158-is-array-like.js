/**
 * Check whether the provided argument is array-like
 */

function isArrayLike(val) {
  try {
    return [...val], true
  } catch (e) {
    return false
  }
}

// console.log(isArrayLike(document.querySelectorAll('.className'))) // true
console.log(isArrayLike('abc')) // true
console.log(isArrayLike(null)) // false
