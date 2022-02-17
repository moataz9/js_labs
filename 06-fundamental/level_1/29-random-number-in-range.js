/**
 * get a random number in the specified range.
 */

const randomNumberInRange = (min, max) => (Math.random() * (max - min) + min).toFixed(4)

console.log(randomNumberInRange(2, 10))
console.log(randomNumberInRange(1, 5))
console.log(randomNumberInRange(-5, -2))
console.log(randomNumberInRange(0, 1))
