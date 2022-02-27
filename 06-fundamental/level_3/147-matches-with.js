/**
 * Compare two objects to determine if the first one contains equivalent property values to the second one, based on a provided function
 */

function matchesWith(obj, source, fn) {
  return Object.keys(source).every(key => {
    if (obj.hasOwnProperty(key) && fn) {
      return fn(obj[key], source[key], key, obj, source)
    } else {
      return obj[key] == source[key]
    }
  })
}

const isGreeting = val => /^h(?:i|ello)$/.test(val)

console.log(
  matchesWith({ greeting: 'hello' }, { greeting: 'hi' }, (oV, sV) => isGreeting(oV) && isGreeting(sV))
)
console.log(
  matchesWith({ greeting: 'hello' }, { greeting: 'hif' }, (oV, sV) => isGreeting(oV) && isGreeting(sV))
)
