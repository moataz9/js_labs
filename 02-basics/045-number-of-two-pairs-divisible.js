/**
 * find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one
 */
function numberOfTwoPairsDivisible(arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
        result++
      }
    }
  }
  return result
}

console.log(numberOfTwoPairsDivisible([1, 3, 2] ));
// The output of -> 2 - (1,3), (1,2).
console.log(numberOfTwoPairsDivisible([2, 4, 6] ));
// The output of -> 2 - (2,4), (2,6)
console.log(numberOfTwoPairsDivisible([2, 4, 16]));
// The output of -> 3 - (2,4), (2,16), (4,16)
