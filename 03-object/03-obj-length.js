/**
 * get the length of a JavaScript object.
 */

Object.obj_size = function (obj) {
  let obj_size = 0
  for (const key in obj) {
    // if (Object.hasOwnProperty.call(obj, key)) obj_size++
    if (obj.hasOwnProperty(key)) obj_size++
  }
  return obj_size;
}
let student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
}

console.log('Size of the current object:', Object.obj_size(student))
