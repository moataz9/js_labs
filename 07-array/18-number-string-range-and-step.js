/**
 *  fill an array with values (numeric, string with one character) on supplied bounds.
 */

function num_string_range(start, end, step) {
  let range = []
  if (
    step === 0 ||
    typeof start == 'undefined' ||
    typeof end == 'undefined' ||
    typeof start != typeof end
  )
    return false

  if (end < start) {
    step = -step
  }

  if (typeof start == 'number') {
    while (step > 0 ? end >= start : end <= start) {
      range.push(start)
      start += step
    }
  } else if (typeof start == 'string') {
    if (start.length != 1 || end.length != 1) {
      throw TypeError('Strings with one character are supported.')
    }

    start = start.charCodeAt(0)
    end = end.charCodeAt(0)

    while (step > 0 ? end >= start : end <= start) {
      range.push(String.fromCharCode(start))
      start += step
    }
  } else {
    throw TypeError('Only string and number are supported')
  }

  return range
}

console.log(num_string_range('a', 'z', 2))
console.log(num_string_range('Z', 'A', 2))
console.log(num_string_range(0, -5, 1))
console.log(num_string_range(0, 25, 5))
console.log(num_string_range(20, 5, 5))
