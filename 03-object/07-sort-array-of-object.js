/**
 * sort an array of JS objects
 */

function sortBy (field_name, reverse, initial) {
  let key = initial ? x => initial(x[field_name]) : x => x[field_name]

  reverse = !reverse ? 1 : -1

  return function (x, y) {
    return (x = key(x)), (y = key(y)), reverse * ((x > y) - (y > x))
  }
}

let library = [
  {
    title: 'Bill Gates',
    author: 'The Road Ahead',
    libraryID: 1254,
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    libraryID: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
]

let newobj = library.sort(sortBy('libraryID', false, parseInt))

console.log(newobj)
