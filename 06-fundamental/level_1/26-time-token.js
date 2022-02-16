/**
 * Measure the time taken by a function to execute
 */

function timeTaken(callback) {
  const result = callback()
  return result
}

console.time('time 1')
console.log('Time taken: ' + timeTaken(() => Math.pow(2, 10)) + ' ms')
console.log('Time taken: ' + timeTaken(() => Math.sqrt(225)) + ' ms')
console.log('Time taken: ' + timeTaken(() => Math.sqrt(5 * 5 + 6 * 6)) + ' ms')
console.timeEnd('time 1')
