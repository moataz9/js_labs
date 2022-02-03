// method 1
function insertion_sort_1(nums) {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1
    let temp = nums[i]
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j + 1] = temp
  }
  return nums
}

// method 2
const insertion_sort_2 = arr =>
  arr.reduce((acc, curr) => {
    if (!acc.length) return [curr]

    acc.some((y, j) => {
      if (curr <= y) {
        acc.splice(j, 0, curr)
        return true
      }
      if (curr > y && j === acc.length - 1) {
        acc.splice(j + 1, 0, curr)
        return true
      }
      return false
    })
    return acc
  }, [])

// console.log(insertion_sort_1([3, 0, 2, 5, -1, 4, 1]))
// console.log(
//   insertion_sort_1([
//     2, 6, 5, 12, -1, 3, 8, 7, 1, -4, 0, 23, 1, -55, 20, 37, 54, 210, -23, 7, 483, 9339, 29, -3, 90, -2,
//     81, 54, 7372, -92, 93, 93, 18, -43, 21,
//   ])
// )

console.log(insertion_sort_2([3, 0, 2, 5, -1, 4, 1]))
console.log(
  insertion_sort_2([
    2, 6, 5, 12, -1, 3, 8, 7, 1, -4, 0, 23, 1, -55, 20, 37, 54, 210, -23, 7, 483, 9339, 29, -3, 90, -2,
    81, 54, 7372, -92, 93, 93, 18, -43, 21,
  ])
)
