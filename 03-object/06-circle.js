/**
 * calculate the area and perimeter of a circle. Create two methods to calculate the area and perimeter.
 * The radius of the circle will be supplied by the user.
 * @param {number} radius - circle radius
 */

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  area() {
    return Math.PI * (this.radius ** 2)
  }

  primeter() {
    return 2 * Math.PI * this.radius
  }
}

const circle1 = new Circle(3)

console.log('Area:', +circle1.area().toFixed(4))
console.log('perimeter:', +circle1.primeter().toFixed(4))
