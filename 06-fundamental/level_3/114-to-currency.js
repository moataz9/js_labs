/**
 * Create a specified currency formatting from a given number
 */

function toCurrency(n, curr, LanguageFormat = undefined) {
  return Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n)
}

console.log(toCurrency(123456.789, 'EUR')) // currency: Euro | currencyLangFormat: Local
console.log(toCurrency(123456.789, 'USD', 'en-us')) // currency: US Dollar | currencyLangFormat: English (United States)
console.log(toCurrency(123456.789, 'USD', 'fa')) //currency: US Dollar | currencyLangFormat: Farsi
console.log(toCurrency(322342436423.2435, 'JPY')) //currency: Japanese Yen | currencyLangFormat: Local
console.log(toCurrency(322342436423.2435, 'JPY', 'fi')) //currency: Japanese Yen | currencyLangFormat: Finnish
