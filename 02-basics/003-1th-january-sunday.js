/**
 * Find 1st January be a Sunday between a range of years ex(2000 : 2050)
 */

function is_1th_january_sunday(year1, year2) {
  for (let i = year1; i <= year2; i++) {
    let d = new Date(i, 0, 1)
    if (d.getDay() === 0) console.log(`1st January is being a Sunday is: ${i}`)
  }
}

console.log(is_1th_january_sunday(2000, 2050))
