function bifercateBy(arr, fn) {
  return arr.reduce(
    (acc, val, i) => {
      acc[fn(val, i) ? 0 : 1].push(val)
      return acc
    },
    [[], []]
  )
}

console.log(bifercateBy(['deep', 'boop', 'beep', 'foo', 'bar'], x => x[0] === 'b'))
