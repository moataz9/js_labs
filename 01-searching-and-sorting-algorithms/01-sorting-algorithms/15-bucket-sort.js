function bucket_sort(arr, size = 5) {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const buckets = Array.from({ length: Math.floor((max - min) / size) + 1 }, () => [])

  arr.forEach(val => {
    buckets[Math.floor((val - min) / size)].push(val)
  })
  return buckets.reduce((acc, curr) => [...acc, ...curr.sort((a, b) => a - b)], [])
}

console.log('Original Array Elements:\n', [3, 0, 2, 5, 4, 1])
console.log('Sorted Array Elements:\n', bucket_sort([3, 0, 2, 5, -1, 4, 1]))
