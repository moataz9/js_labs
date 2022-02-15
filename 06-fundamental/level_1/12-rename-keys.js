/**
 * replace the names of multiple object keys with the values provided.
 */

const rename_keys = (keysMap, obj) => {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  )
}

const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 }
console.log(rename_keys({ name: 'firstName', job: 'Actor' }, obj))
