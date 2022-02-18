function initialize2DArray(w, h, val = null) {
  return Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val))
}

console.log(initialize2DArray(2, 2, 0))
console.log(initialize2DArray(3, 2, 3))
console.log(initialize2DArray(3, 3))
