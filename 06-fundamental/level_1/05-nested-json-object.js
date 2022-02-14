/**
 * Target a given value in a nested JSON object
 */

function nestedJsonObject(obj, target) {
  if (target in obj) return obj[target]
  else {
    return Object.values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc
      if (typeof val === 'object') return nestedJsonObject(val, target)
    }, undefined)
  }
}

const data = {
  'l1': {
    'l2': {
      'l3': 'Some data',
    },
  },
}

console.log(nestedJsonObject(data, 'l1'))
console.log(nestedJsonObject(data, 'l2'))
console.log(nestedJsonObject(data, 'l3'))
console.log(nestedJsonObject(data, 'l4'))

const dog = {
  'status': 'success',
  'message': 'https://images.dog.ceo/breeds/african/n02116738_1105.jpg',
}

console.log(nestedJsonObject(dog, 'message'))