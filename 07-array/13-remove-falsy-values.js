/**
 * remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
 */

function filter_array(test_array) {
  let index = -1
  let arr_length = test_array ? test_array.length : 0
  let resIndex = -1
  let result = []

  while (++index < arr_length) {
    let value = test_array[index]

    if (value) {
      result[++resIndex] = value
    }
  }

  return result
}

console.log(filter_array([NaN, 0, 15, false, -22, '', undefined, 47, null]))
