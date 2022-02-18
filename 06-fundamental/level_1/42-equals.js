//#Source https://bit.ly/2neWfJ2
const equals = (a, b) => {
  if (a === b) return true
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b
  if (a === null || a === undefined || b === null || b === undefined) return false
  if (a.prototype !== b.prototype) return false
  let a_keys = Object.keys(a)
  let b_keys = Object.keys(b)
  if (a_keys.length !== b_keys.length) return false
  return a_keys.every(k => equals(a[k], b[k]))
}

console.log(equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }))
