/**
 *? Write a JavaScript program to sort a list of elements using Merge sort.

According to Wikipedia "Merge sort (also commonly spelled mergesort) is an O (n log n) comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output."

Algorithm:

Conceptually, a merge sort works as follows :

Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.
*/

// method one
function merge_sort_1(left_part, right_part) {
  let i = 0
  let j = 0
  let results = []

  while (i < left_part.length || j < right_part.length) {
    if (i === left_part.length) {
      // j is the only index left_part
      results.push(right_part[j])
      j++
    } else if (j === right_part.length || left_part[i] <= left_part[j]) {
      results.push(left_part[i])
      i++
    } else {
      results.push(right_part[j])
      j++
    }
  }
  return results
}

console.log(merge_sort_1([1, 3, 4], [3, 7, 9]))

// method 2
Array.prototype.merge_sort = function () {
  if (this.length <= 1) return this

  const half = parseInt(this.length / 2)
  const left = this.slice(0, half).merge_sort()
  const right = this.slice(half, this.length).merge_sort()

  return ((left, right) => {
    let arr = []
    while (left.length > 0 && right.length > 0) {
      arr.push(left[0] <= right[0] ? left.shift() : right.shift())
    }
    return arr.concat(left).concat(right)
  })(left, right)
}

let arr = [23, 14, 24, 34, 44, 22, 1, 49]
console.log(arr.merge_sort())
