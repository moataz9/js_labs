/**
 * @return the minimum-maximum value of an array, after applying the provided function to set comparing rule.
 */

//#Source https://bit.ly/2neWfJ2
function reduceWhich(arr, comparator = (a, b) => a - b) {
  return arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a))
}

console.log(reduceWhich([1, 3, 2]))
console.log(reduceWhich([10, 30, 20], (a, b) => b - a))
console.log(
  reduceWhich(
    [
      { name: 'Kevin', age: 16 },
      { name: 'John', age: 20 },
      { name: 'Ani', age: 19 },
    ],
    (a, b) => a.age - b.age
  )
)
