/**
 * Check if two given numbers are approximately equal to each other
 */

function approximatelyEqual(v1, v2, epsilon = 0.001) {
  return Math.abs(v1 - v2) < epsilon
}

console.log(approximatelyEqual(Math.PI / 2.0, 1.5708))
