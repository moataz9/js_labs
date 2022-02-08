function alternateSums(arr) {
  let result = [0, 0]

  for (let i = 0; i < arr.length; i++) {
    if (i % 2) result[1] += arr[i]
    else result[0] += arr[i]
  }

  return result
}

console.log(alternateSums([1, 3, 6, 2, 5, 10]))
