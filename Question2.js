//Circle Class  Convert the UML diagram to Typescript class. - use number for double

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  toString() {
    return `Circle with radius ${this.radius} and color ${this.color}`;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const maths =new Circle(6,'green');
console.log(maths.getArea());
console.log(maths.getCircumference());
console.log(maths.getColor());
console.log(maths.setColor("Blue"));
console.log(maths.getColor());
console.log(maths);
