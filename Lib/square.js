const Shape = require("./shape");
//The extends keyword can be used to subclass custom classes
class Square extends Shape {
  constructor(data) {
    //The super() keyword in JavaScript is used to call the constructor of a parent class from a child class
    super(data);
  }
  render() {
    //The `return` statement is used to return an "element". The element is a basic HTML element that is used to draw a rectangle. The `width`, `height`, and `rx` attributes of the `` element are used to specify the width, height, and corner radius of the rectangle. The `fill` attribute is used to specify the color of the rectangle.
    return `<rect width="100" height="100" rx="15" fill="${this.logoShapeColor}" />`;
  }
}

module.exports =  Square  ;