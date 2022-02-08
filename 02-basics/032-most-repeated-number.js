/**
 *  find the number which appears most in a given array of integers.
 */

// method 1
function mostRepeatedNumber(arr) {
  let ctr = []
  let ans = 0

  for (let i = 0; i < Math.max(...arr); i++) {
    ctr.push(0)
  }

  for (let i = 0; i < arr.length; i++) {
    ctr[arr[i] - 1]++
    if (ctr[arr[i] - 1] > ctr[ans]) {
      ans = arr[i] - 1
    }
  }
  return ans + 1
}

// method 2
function mostRepeatedNumber_2(arr) {
  let result = 0
  let step = 0
  let temp = {}

  arr.map(item => {
    return temp[item] ? temp[item]++ : (temp[item] = 1)
  })

  for (const key in temp) {
    if (temp[key] > step) {
      step = temp[key]
      result = key
    }
  }

  return result
}

console.log(mostRepeatedNumber([1, 2, 3, 2, 2, 8, 1, 9]))
console.log(mostRepeatedNumber([9, 1, 2, 23, 23, 23, 23, 23, 23, 23, 23, 9]))
console.log(mostRepeatedNumber_2([1, 2, 3, 2, 2, 8, 1, 9]))
console.log(mostRepeatedNumber_2([9, 1, 2, 23, 23, 23, 23, 23, 23, 23, 23, 9]))
