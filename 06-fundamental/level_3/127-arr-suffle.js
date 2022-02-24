/**
 *  randomize the order of the values of an array, returning a new array.
 */

function shuffle([...arr]) {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}
const foo = [1, 2, 3]

console.log(shuffle(foo))
