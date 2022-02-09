function changeCase(new_str) {
  let x = 0
  let y = 0

  for (let i = 0; i < new_str.length; i++) {
    if (/[A-Z]/.test(new_str[i])) x++
    else y++
  }

  if (y > x) return new_str.toLowerCase()

  return new_str.toUpperCase()
}

console.log(changeCase('WriTe'))
console.log(changeCase('PHp'))
