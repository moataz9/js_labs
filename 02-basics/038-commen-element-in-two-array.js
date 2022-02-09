/**
 * check whether there is at least one element which occurs in two given sorted arrays of integers.
 */

function check_common_element(arra1, arra2) {
  for (let i = 0; i < arra1.length; i++) {
    if (arra2.indexOf(arra1[i]) != -1) return true
  }
  return false
}
console.log(check_common_element([1, 2, 3], [3, 4, 5]))
console.log(check_common_element([1, 2, 3], [5, 6, 7]))
