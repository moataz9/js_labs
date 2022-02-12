/**
 * Compare two objects to determine if the first one contains equivalent property values to the second one.
 */

function matches(obj, source) {
  return Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
}

console.log(
  matches(
    { age: 25, hair: 'long', beard: true },
    { hair: 'long', beard: true }
  )
) 
// true
console.log(
  matches(
    { hair: 'long', beard: true }, 
    { age: 25, hair: 'long', beard: true }
  )
)
// false