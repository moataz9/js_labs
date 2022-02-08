/**
 * find the types of a given angle.
 * Types of angles:
 * • Acute angle: An angle between 0 and 90 degrees.
 * • Right angle: An 90 degree angle.
 * • Obtuse angle: An angle between 90 and 180 degrees.
 * • Straight angle: A 180 degree angle.
 */

function angle_Type(angle) {
  if (angle < 90) return 'Acute angle.'

  if (angle === 90) return 'Right angle.'

  if (angle < 180) return 'Obtuse angle.'

  return 'Straight angle.'

  // ternary version
  // return angle < 90 ? 'Acute angle.' : angle === 90 ? 'Right angle' : angle < 180 ? 'Obtuse angle' : 'Straight angle'
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))
