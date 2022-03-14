/**
 * find the longest common starting substring in a set of strings.
 */

function longestCommonStartingSubstring(arr1) {
  let arr = arr1.concat().sort()
  let a1 = arr[0]
  let a2 = arr[arr.length - 1]
  let len = a1.length
  let i = 0
  while (i < len && a1.charAt(i) === a2.charAt(i)) i++
  return a1.substring(0, i)
}

console.log(longestCommonStartingSubstring(['go', 'google']))
console.log(longestCommonStartingSubstring(['SQLInjection', 'SQLTutorial']))
console.log(longestCommonStartingSubstring(['abcd', '1234']))
