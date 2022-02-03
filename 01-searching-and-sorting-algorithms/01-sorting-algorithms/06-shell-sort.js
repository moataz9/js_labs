function shell_sort(arr) {
  let increment = arr.length / 2

  while (increment > 0) {
    for (let i = increment; i < arr.length; i++) {
      let j = i
      let temp = arr[i]
      while (j >= increment && arr[j - increment] > temp) {
        arr[j] = arr[j - increment]
        j = j - increment
      }
      arr[j] = temp
    }
    if (increment == 2) {
      increment = 1
    } else {
      increment = parseInt((increment * 5) / 11)
    }
  }

  return arr
}

console.log(shell_sort([3, 0, -2, 5, -1, 4, 1, 1]))
