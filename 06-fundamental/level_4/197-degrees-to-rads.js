/**
 * convert an given angle from degrees to radians.
 */

function degreesToRads(deg) {
  return (deg * Math.PI) / 180.0
}

console.log(degreesToRads(30.0))
console.log(degreesToRads(90.0))
console.log(degreesToRads(300.0))
console.log(degreesToRads(360.0))
