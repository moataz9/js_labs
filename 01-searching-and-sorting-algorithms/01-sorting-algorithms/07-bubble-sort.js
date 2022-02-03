// method 1
function swap(arr, first_index, second_index) {
  let temp = arr[first_index]

  arr[first_index] = arr[second_index]
  arr[second_index] = temp
}

function bubble_sort_1(arr) {
  let len = arr.length
  let stop
  for (let i = 0; i < len; i++) {
    for (let j = 0, stop = len - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

// method 2
const bubble_sort_2 = arr => {
  let swapped = false
  const customArray = [...arr]
  for (let i = 0; i < customArray.length; i++) {
    swapped = false
    for (let j = 0; j < customArray.length - 1; j++) {
      if (customArray[j + 1] < customArray[j]) {
        ;[customArray[j], customArray[j + 1]] = [customArray[j + 1], customArray[j]]
        swapped = true
      }
    }

    if (!swapped) return customArray
  }
  return customArray
}

console.log(bubble_sort_1([3, 0, 2, 5, -1, 4, 1]))
console.log(bubble_sort_2([3, 0, 2, 5, -1, 4, 1]))
