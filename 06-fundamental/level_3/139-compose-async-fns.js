/**
 * perform left-to-right function composition for asynchronous functions.
 */

function composeAsyncFns(...fns) {
  return arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg))
}

const composing = composeAsyncFns(
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4
)

;(async () => {
  console.log(await composing(5)) // 15 (after one second)
})()
