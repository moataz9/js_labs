/**
 * Convert an asynchronous function to return a promise
 */

function promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      return fn(...args, (err, result) => (err ? reject(err) : resolve(result)))
    })
  }
}

const delay = promisify((d, cd) => setTimeout(cd, d))
delay(1000).then(() => console.log('Hi'))
