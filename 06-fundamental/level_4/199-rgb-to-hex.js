/**
 * Convert the values of RGB components to a color code
 */

function RGBToHex(r, g, b) {
  return ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')
}

console.log(RGBToHex(255, 165, 1))
console.log(RGBToHex(255, 255, 1))
