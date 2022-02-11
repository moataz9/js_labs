function allKeys(obj) {
  if (!isObject(obj)) return []
  let keys = []
  for (let key in obj) keys.push(key)
  return keys
}
function isObject(obj) {
  let type = typeof obj
  return type === 'function' || (type === 'object' && !!obj)
}
function Student(name) {
  this.name = name
}
Student.prototype.rollno = true
console.log(allKeys(new Student('Sara')))
