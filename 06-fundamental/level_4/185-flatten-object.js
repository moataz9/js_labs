/**
 * Flatten an object with the paths for keys
 */

function flattenObject(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : ''

    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k))
    else acc[pre + k] = obj[k]

    return acc
  }, {})
}

console.log(flattenObject({ a: { b: { c: 1, em: 'em' } }, d: 1 }))
