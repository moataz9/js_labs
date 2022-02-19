/**
 * Execute a provided function once for each array element, starting from the array's last element.
 */

//#Source https://bit.ly/2neWfJ2
function forEachRight(arr, callback) {
  return arr.reverse().forEach(callback)
}

forEachRight([1, 2, 3, 4], val => console.log(val))
