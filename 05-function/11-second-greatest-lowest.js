/**
 * Find the second lowest and second greatest numbers from an array
 */

function secondGreatestLowest(arr_nums) {
  arr_nums = arr_nums.sort((a, b) => a - b)

  let uniqa = [arr_nums[0]]
  let result = []

  for (let i = 1; i < arr_nums.length; i++) {
    if (arr_nums[i - 1] !== arr_nums[i]) uniqa.push(arr_nums[i])
  }

  result.push(uniqa[1], uniqa[uniqa.length - 2])
  return result.join(', ')
}

console.log('secondGreatestLowest([1, 2, 3, 4, 5]):', secondGreatestLowest([1, 2, 3, 4, 5]))
console.log('secondGreatestLowest([1, 2, 3, 44, 5]):', secondGreatestLowest([1, 2, 3, 44, 5]))
