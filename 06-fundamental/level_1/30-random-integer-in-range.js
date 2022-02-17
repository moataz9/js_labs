/**
 * get a random integer in the specified range.
 */

const randomIntegerInRange = (min, max) => ~~(Math.random() * (max - min) + min).toFixed(4)

console.log(randomIntegerInRange(2, 10))
console.log(randomIntegerInRange(1, 5))
console.log(randomIntegerInRange(-5, -2))
console.log(randomIntegerInRange(0, 12))
