/**
 * add two positive integers without carrying.
 */

function addTwoIntWithoutCarrying(n1, n2) {
  let result = 0
  let x = 1

  while (n1 > 0 && n2 > 0) {
    result += x * ((n1 + n2) % 10)
    n1 = Math.floor(n1 / 10)
    n2 = Math.floor(n2 / 10)
    x *= 10
  }

  return result
}

console.log(addTwoIntWithoutCarrying(222, 911))
console.log(addTwoIntWithoutCarrying(200, 900))
console.log(addTwoIntWithoutCarrying(2000, 9000))
