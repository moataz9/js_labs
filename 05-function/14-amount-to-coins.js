/**
 * convert an amount to coins.
 */

function amountToCoins(amount, coins) {
  if (amount === 0) {
    return []
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0]
      return [coins[0]].concat(amountToCoins(left, coins))
    } else {
      coins.shift()
      return amountToCoins(amount, coins)
    }
  }
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]))
