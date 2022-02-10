/**
 * get the volume of a Cylinder with four decimal places using object classes.
 * Volume of a cylinder : V = π * r^2 * h
 * where r is the radius and h is the height of the cylinder.
 */

class cylinder {
  constructor(cyl_height, cyl_diameter) {
    this.cyl_diameter = cyl_diameter
    this.cyl_height = cyl_height
  }

  volume() {
    let radius = this.cyl_diameter / 2
    return this.cyl_height * Math.PI * (radius ** 2)
  }
}

let cyl = new cylinder(7, 4);
console.log('Volume:', cyl.volume().toFixed(4));