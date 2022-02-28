/**
 * Check whether the provided integer is a prime number or not
 */

function isPrime(num) {
  const boundary = Math.floor(Math.sqrt(num))
  for (let i = 2; i <= boundary; i++) if (num % i === 0) return false
  return num >= 2
}

console.log(isPrime(11)) // true
console.log(isPrime(17)) // true
console.log(isPrime(2)) // true
console.log(isPrime(8)) // false
