/**
 * Invokes the provided function after wait milliseconds
 */

function delay(fn, wait, ...args) {
  return setTimeout(fn, wait, ...args)
}

delay(text => console.log(text), 1000, 'later')
