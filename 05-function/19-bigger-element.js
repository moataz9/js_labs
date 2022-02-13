/**
 * Bigger than number elements in an array
 */

// function biggerElements(val) {
//   return (el_value, index, array) => el_value >= val
// }

// let result = [11, 45, 4, 31, 64, 10].filter(biggerElements(10))
// console.log(result);

let result = [11, 45, 4, 31, 64, 10].filter(item => item >= 10)
console.log(result);
