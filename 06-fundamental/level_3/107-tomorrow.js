/**
 * Create tomorrow's date in a string representation
 */

function tomorrow(long = false) {
  let t = new Date()
  t.setDate(t.getDate() + 1)
  const ret = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(
    t.getDate()
  ).padStart(2, '0')}`
  return !long ? ret : `${ret}T00:00:00`
}

console.log(tomorrow());
console.log(tomorrow(true));