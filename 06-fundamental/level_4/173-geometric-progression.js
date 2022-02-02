/**
 * Initializes an array containing the numbers in the specified range where start and
 * end are inclusive and the ratio between two terms is step. Returns an error if step equals 1.
 */

function geometricProgression(end, start = 1, step = 2) {
  return Array.from(
    { length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 },
    (v, i) => start * step ** i
  )
}

console.log(geometricProgression(256))
console.log(geometricProgression(256, 3))
console.log(geometricProgression(256, 1, 4))
