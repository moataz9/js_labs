/**
 * replace all but the last number of characters with the specified mask character.
 */

function mask(cc, num = 4, mask = '*') {
  cc = String(cc)
  // return cc.slice(0, -num).replace(/./g, mask) + cc.slice(-num)
  return cc.slice(-num).padStart(cc.length, mask);
}

console.log(mask(1234567890));
console.log(mask(1234567890, 3));
console.log(mask(1234567890, 3, '-'));