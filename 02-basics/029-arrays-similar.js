/**
 * check whether two arrays of integers of same length are similar or not.
 * The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
 */

function arraysSimilar(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr1.length; j++) {
      let result = true
      let temp = arr1[i]
      arr1[i] = arr1[j]
      arr1[j] = temp
      for (let k = 0; k < arr1.length; k++) {
        if (arr1[k] !== arr2[k]) {
          result = false
          break
        }
      }

      if (result) return true

      arr1[j] = arr1[i]
      arr1[i] = temp
    }
  }
  return false;
}

console.log(arraysSimilar([10,20,30], [10,20,30]))
console.log(arraysSimilar([10,20,30], [30,10,20]))
console.log(arraysSimilar([10,20,30,40], [10,30,20,40]))