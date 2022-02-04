function gnome_sort(arr) {
  function move_back(i) {
    for (; i > 0 && arr[i - 1] > arr[i]; i--) {
      ;[arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) move_back(i)
  }
  return arr
}

console.log('Original Array Elements:\n', [3, 0, 2, 5, -1, 4, 1])
console.log('Sorted Array Elements:\n', gnome_sort([3, 0, 2, 5, -1, 4, 1]))
