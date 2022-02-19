/**
 * chain asynchronous functions.
 */

function asynchronousChaining(fns) {
  let curr = 0
  ;(function next() {
    return fns[curr++](next)
  })()
}

asynchronousChaining([
  next => {
    console.log('100 ms')
    setTimeout(next, 100)
  },
  next => {
    console.log('200 ms')
    setTimeout(next, 100)
  },
  () => {
    console.log('300 ms')
  },
])
