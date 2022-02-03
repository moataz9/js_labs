/**
 * (1) JavaScript Searching and Sorting Algorithm
 *? Task: Write a JavaScript program to sort a list of elements using Quick sort.
 ** desciption: Quick sort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined.
 */

// method One
function quik_sort_1(originalArray) {
  if (!originalArray.length) return originalArray
  else {
    let left = []
    let right = []
    let newArray = []
    let pivot = originalArray.pop()

    for (let i = 0; i < originalArray.length; i++) {
      if (originalArray[i] <= pivot) {
        left.push(originalArray[i])
      } else {
        right.push(originalArray[i])
      }
    }

    return newArray.concat(quik_sort_1(left), pivot, quik_sort_1(right))
  }
}

let testArray = [3, 0, 2, 5, -1, 4, 1]


// method 2
function quik_sort_2(arr) {
  const originalArray = [...arr]

  if (!originalArray.length) return originalArray

  const pivotIndex = Math.floor(originalArray.length / 2)
  const pivot = originalArray[pivotIndex]

  const [low, high] = originalArray.reduce(
    (acc, curr, i) => {
      if (curr < pivot || (curr === pivot && i !== pivotIndex)) {
        acc[0].push(curr)
      } else if (curr > pivot) {
        acc[1].push(curr)
      }
      return acc
    },
    [[], []]
  )

  return [...quik_sort_2(low), pivot, ...quik_sort_2(high)]
}

// console.log('Original Array', testArray);
// let sortedArray = quik_sort_1(testArray)
// console.log('Sorted Array', sortedArray);

console.log('Original Array m2 \n', testArray)
let sortedArray = quik_sort_2(testArray)
console.log('Sorted Array m2 \n', sortedArray)
