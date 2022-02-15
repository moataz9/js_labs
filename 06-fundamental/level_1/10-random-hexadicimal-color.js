/**
 * random hexadecimal color code.
 */

function randomHEXColor() {
  // return `#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`
  return `#${Math.random().toString(16).slice(2, 8)}`
}

console.log(randomHEXColor())
