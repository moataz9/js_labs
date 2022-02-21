/**
 * hash an given input string into a whole number.
 */

function sdbm(str) {
  let arr = str.split('')
  return arr.reduce(
    (hashCode, currentVal) =>
      (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
    0
  )
}

console.log(sdbm('w3r'))
console.log(sdbm('name'))
