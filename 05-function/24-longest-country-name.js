/**
 * Find longest word (country name)
 */

function longestCountryName(country_name) {
  return country_name.reduce((lname, country) => {
    return lname.length > country.length ? lname : country
  }, '')
}

console.log(longestCountryName(['Australia', 'Germany', 'United States of America']))
