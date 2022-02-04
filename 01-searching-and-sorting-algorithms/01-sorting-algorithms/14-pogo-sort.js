function bogo_sort(arr) {
  let is_sorted = function (arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) return false
    }
    return true
  }

  function shuffle(arr) {
    let count = arr.length
    let temp, index
    while (count > 0) {
      index = Math.floor(Math.random() * count)
      count--
      temp = arr[count]
      arr[count] = arr[index]
      arr[index] = temp
    }

    return arr
  }

  function sort(arr) {
    let sorted = false
    while (!sorted) {
      arr = shuffle(arr)
      sorted = is_sorted(arr)
    }
    return arr
  }

  return sort(arr)
}

console.log('Original Array Elements:\n', [3, 0, 2, 5, -1, 4, 1])
console.log('Sorted Array Elements:\n', bogo_sort([3, 0, 2, 5, -1, 4, 1]))
