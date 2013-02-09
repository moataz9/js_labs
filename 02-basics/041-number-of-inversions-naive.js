/**
 * find the number of inversions of a given array of integers.
 */

function numberOfInversionsNaive(arr) {
  let ctr = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) ctr++
    }
  }
  return ctr;
}
console.log(numberOfInversionsNaive([0, 3, 2, 5, 9]));   
console.log(numberOfInversionsNaive([1, 5, 4, 3]));   
console.log(numberOfInversionsNaive([10, 30, 20, -10])); 