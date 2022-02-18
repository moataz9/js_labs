/**
 * Get a customized coalesce function that returns the first argument that returns true from the provided argument validation function.
 */

function coalesceFactory(valid) {
  return (...args) => args.find(valid)
}

const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_))

console.log(customCoalesce(undefined, null, NaN, '', 'Waldo'))
