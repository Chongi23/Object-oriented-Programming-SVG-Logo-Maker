const Shape = require("./shape");

class Circle extends Shape {
  constructor(data) {
     //The super() keyword in JavaScript is used to call the constructor of a parent class from a child clas
    super(data);
  }
  render() {
    //The <circle> SVG element is an SVG basic shape, used to draw circles based on a center point and a radius.
    return `<circle cx="50" cy="50" r="50" fill="${this.logoColor}" />`;
  }
}

module.exports = Circle;
