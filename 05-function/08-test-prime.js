/**
 * test given number if is a prime number
 */

function testPrime(n) {
  if (n === 1) return false
  else if (n === 2) return true
  else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false
      }
    }
    return true
  }
}

console.log('testPrime(3):', testPrime(3))
console.log('testPrime(99):', testPrime(99))
console.log('testPrime(7):', testPrime(7))
console.log('testPrime(4):', testPrime(4))
