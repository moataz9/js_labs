/**
 * Get the distance between two given points
 */

function distance(x0, y0, x1, y1) {
  return Math.hypot(x1 - x0, y1 - y0)
}

console.log(distance(1, 1, 2, 3))
console.log(distance(-1, -1, 2, 3))
