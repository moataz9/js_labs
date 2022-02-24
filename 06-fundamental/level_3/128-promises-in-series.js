/**
 * run a given array of promises in series.
 */

function runPromisesInSeries(ps) {
  return ps.reduce((p, next) => p.then(next), Promise.resolve())
}

const delay = d => new Promise(r => setTimeout(r, d))

// Executes each promise sequentially, taking a total of 3 seconds to complete
runPromisesInSeries([() => (delay(1000), console.log('1')), () => (delay(2000), console.log('2'))])
