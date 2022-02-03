// method 1
// Selection sort with O(n^2) time complexity
function selection_sort_1(arr, compare_Function) {
  const compare = (a, b) => a - b

  let min = 0
  let index = 0
  let temp = 0

  //{Function} compare_Function Compare function
  compare_Function = compare_Function || compare

  for (let i = 0; i < arr.length; i += 1) {
    index = i
    min = arr[i]

    for (let j = i + 1; j < arr.length; j += 1) {
      if (compare_Function(min, arr[j]) > 0) {
        min = arr[j]
        index = j
      }
    }

    temp = arr[i]
    arr[i] = min
    arr[index] = temp
  }

  //return sorted arr
  return arr
}

// method 2
const selection_sort_2 = arr => {
  const customArr = [...arr]
  for (let i = 0; i < customArr.length; i++) {
    const min = customArr.slice(i + 1).reduce((acc, val, j) => {
      return val < customArr[acc] ? j + i + 1 : acc
    }, i)

    if (min !== i) [customArr[i], customArr[min]] = [customArr[min], customArr[i]]
  }
  return customArr
}

// console.log(selection_sort_1([3, 0, 2, 5, -1, 4, 1], (a, b) => a - b))
// console.log(selection_sort_1([3, 0, 2, 5, -1, 4, 1]))
// console.log(selection_sort_1([3, 0, 2, 5, -1, 4, 1], (a, b) => b - a))

console.log(selection_sort_2([5, 1, 4, 2, 3]))
