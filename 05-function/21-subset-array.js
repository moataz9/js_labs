/**
 * get all possible subset with a fixed length (for example 2) combinations in an array.
 */

function subsetArray(arr, arr_size) {
  let result_set = []
  let result = []

  for (let x = 0; x < Math.pow(2, arr.length); x++) {
    result = []
    i = arr.length - 1

    do {
      // check if x is even
      if ((x & (1 << i)) !== 0) result.push(arr[i])
    } while (i--)

    if (result.length >= arr_size) result_set.push(result)
  }

  return result_set
}

console.log(subsetArray([1, 2, 3], 2))
