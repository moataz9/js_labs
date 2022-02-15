/**
 * converts a specified number to an array of digits.
 */

const digitize = number => [...`${number}`].map(i => parseInt(i))

console.log(digitize(123));
console.log(digitize(10305));
