/**
 * compute the value of bn where n is the exponent and b is the bases.
 * @param {Number} number - exponent
 * @param {Number} bases - bases
 */

function exponent (number, bases) {
  let ans = 1;
  for (let i = 1; i <= bases; i++) {
    ans = number * ans
  }
  return ans;
}

console.log(exponent(2, 3));
