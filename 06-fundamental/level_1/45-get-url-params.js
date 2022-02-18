/**
 * Get an object containing the parameters of the current URL
 */

// method 1
function getURLParameters(url) {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  )
}
console.log(getURLParameters('http://url.com/page?name=Adam&surname=Smith'))
console.log(getURLParameters('google.com'))
console.log(getURLParameters('https://www.w3resource.com'))

// method 2
const getUrl = url => {
  let arr
  if (url.includes('?')) {
    arr = url
      .slice(url.indexOf('?') + 1)
      .split('&')
      .map(s => s.split('='))
  } else arr = []

  return Object.fromEntries(arr)
}

console.log(getUrl('http://url.com/page?name=Adam&surname=Smith')) // {name: "Adam", surname: "Smith"}
console.log(getUrl('google.com')) // {}
