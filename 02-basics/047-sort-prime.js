/**
 * sort an array of all prime numbers between 1 and a given integer
 */

function sortPrime(num) {
  let prime_num1 = []
  let prime_num2 = []

  for (let i = 0; i <= num; i++) {
    prime_num2.push(true)
  }

  for (let i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i)
      for (let j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false
      }
    }
  }

  return prime_num1
}

console.log(sortPrime(5))
console.log(sortPrime(11))
console.log(sortPrime(19))
console.log(sortPrime(195))
