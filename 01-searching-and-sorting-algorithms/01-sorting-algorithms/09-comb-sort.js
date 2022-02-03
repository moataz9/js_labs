function is_array_sorted(arr) {
  let sorted = true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      sorted = false
      break
    }
  }
  return sorted
}

function comb_sort(arr) {
  let iteration_count = 0
  let gap = arr.length - 2
  let decrease_factor = 1.25
  // repeat iteration until array is not sorted
  while (!is_array_sorted(arr)) {
    // if not first Calculate gap
    if (iteration_count > 0) gap = gap === 1 ? gap : Math.floor(gap / decrease_factor)

    // set front and back elements and increment to a gap
    let front = 0
    let back = gap
    while (back <= arr.length - 1) {
      // Swap the element if they are not ordered
      if (arr[front] > arr[back]) {
        ;[arr[front], arr[back]] = [arr[back], arr[front]]
      }

      // increment and re-run swapping
      front++
      back++
    }
    iteration_count++
  }
  return arr
}

console.log('Original Array Elements: \n', [3, 0, 2, 5, -1, 4, 1])
console.log('Sorted Array Elements: \n', comb_sort([3, 0, 2, 5, -1, 4, 1]))
