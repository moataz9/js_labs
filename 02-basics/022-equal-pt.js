/**
 * check whether a given string contains equal number of p's and t's.
 */

function equal_pt(str) {
  let str_p = str.replace(/[^p]/g, '')
  let str_t = str.replace(/[^t]/g, '')

  let p_num = str_p.length
  let s_num = str_t.length

  return p_num === s_num
}

console.log(equal_pt('paattpss'))
console.log(equal_pt('paatps'))
