/**
 * Return the object associating the properties to the values of a given array of valid property identifiers and an array of values
 */

function zipObject(props, values) {
  return props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {})
}

console.log(zipObject(['a', 'b', 'c'], [1, 2]))
console.log(zipObject(['a', 'b'], [1, 2, 3]))
