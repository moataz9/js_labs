/**
 * retrieve the value of a given property from all elements in an array.
 */

function propertyValue(array, property_key) {
  let arr = [],
  index = -1,
  arrlen = array.length,
  array_items
  
  while (++index < arrlen) {
    array_items = array[index]
    
    if (array_items.hasOwnProperty(property_key)) {
      arr[arr.length] = array_items[property_key]
    }
  }

  return arr
}

const library = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    libraryID: 3245,
  },
]
console.log(propertyValue(library, 'title'))
console.log(propertyValue(library, 'author'))
