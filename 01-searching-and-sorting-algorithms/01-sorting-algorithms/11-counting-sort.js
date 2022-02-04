function counting_sort(arr, min, max) {
  let z = 0
  let count = []
  for (let i = min; i <= max; i++) {
    count[i] = 0
  }
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++
  }
  for (let i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      arr[z++] = i
    }
  }
  return arr
}

console.log('Original Array Elements:\n', [3, 0, 2, 5, 4, 1])
console.log('Sorted Array Elements:\n', counting_sort([3, 0, 2, 5, 4, 1], 3, 5))
