/**
 * Check if the given number falls within the given range
 */

function inRange(n, start, end = null) {
  if (end && start > end) {
    end = [start, (start = end)][0]
  }

  return end == null ? n >= 0 && n < start : n >= start && n < end
}
console.log(inRange(3, 2, 5)) // true
console.log(inRange(3, 4)) // true
console.log(inRange(2, 3, 5)) // false
console.log(inRange(3, 2)) // false



