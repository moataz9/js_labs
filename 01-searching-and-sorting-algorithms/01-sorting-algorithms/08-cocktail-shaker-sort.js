function cocktail_shaker_sort(nums) {
  let is_sorted = true
  while (is_sorted) {
    for (let i = 0; i < nums.length -1; i++) {
      if (nums[i] > nums[i + 1]) {
        ;[nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
        is_sorted = true
      }
    }
    if (!is_sorted) break

    is_sorted = false

    for (let j = nums.length; j >= 0; j--) {
      if (nums[j - 1] > nums[j]) {
        ;[nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
        is_sorted = true
      }
    }
  }
  return nums;
}

console.log('Original array: \n', [4, 9, 0, 3, 1, 5])
console.log('Sorted array:   \n', cocktail_shaker_sort([4, 9, 0, 3, 1, 5]))
