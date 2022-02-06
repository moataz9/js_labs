/**
 * get triangle area by horen's formale
 * get semi-perimeter
 * s = (side1 + side2 + side3) / 2
 * Area = Math.sqrt(s(s - side1)(s - side2)(s - side3))
 */

function triangleArea(side1, side2, side3) {
  let s = (side1 + side2 + side3) / 2

  let Area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))

  return Area.toFixed(2)
}

console.log(triangleArea(5, 6, 7))
console.log(triangleArea(7, 7, 15))
