/**
 * calculate number of days left until next Christmas (December 25 every year)
 */

function daysUntilChristmas() {
  const today = new Date()

  let chrismas = new Date(today.getFullYear(), 11, 25)
  if (today.getMonth() === 11 && today.getDate() > 25) {
    chrismas.setFullYear(chrismas.getFullYear() + 1)
  }

  const oneDay = 24 * 60 * 60 * 1000

  return Math.ceil((chrismas.getTime() - today.getTime()) / oneDay)
}

console.log(`Theres is ${daysUntilChristmas()} days left until christmas`)
