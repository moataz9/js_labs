/**
 * find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.
 */

function twoSummation(nums, target_num) {
  let map = []
  let indexnum = []

  for (let x = 0; x < nums.length; x++) {
    if (map[nums[x]] != null) {
      let index = map[nums[x]]
      indexnum[0] = index
      indexnum[1] = x
      break
    } else {
      map[target_num - nums[x]] = x
    }
  }
  return indexnum
}
console.log(twoSummation([10, 20, 10, 40, 50, 60, 70], 50))
