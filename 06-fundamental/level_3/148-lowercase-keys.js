/**
 * create a new object from the specified object, where all the keys are in lowercase.
 */

function lowercaseKeys(obj) {
  return Object.keys(obj).reduce((acc, key) => ((acc[key.toLowerCase()] = obj[key]), acc), {})
}

const myObj = { Name: 'Adam', sUrNaMe: 'Smith' }
console.log(lowercaseKeys(myObj))
