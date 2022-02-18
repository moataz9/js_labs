/**
 * Get an array of function property names from own enumerable properties of an object.
 */

function functions(obj, inherited) {
  return (
    inherited ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))] : Object.keys(obj)
  ).filter(key => typeof obj[key] === 'function')
}

function Foo() {
  this.a = () => 1
  this.b = () => 2
}
Foo.prototype.c = () => 3

console.log(functions(new Foo()))
console.log(functions(new Foo(), true))
