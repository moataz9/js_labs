/**
 * Compute the factors of a positive integer
 */

function factors(n) {
  let num_factors = []

  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i += 1) {
    if (n % i === 0) {
      num_factors.push(i)
      if (n / i !== i) num_factors.push(n / i)
    }
  }

  num_factors.sort((x, y) => x - y) // numeric sort
  return num_factors
}

console.log('factors(15):', factors(15)) // [1,3,5,15]
console.log('factors(16):', factors(16)) // [1,2,4,8,16]
console.log('factors(17):', factors(17)) // [1,17]
