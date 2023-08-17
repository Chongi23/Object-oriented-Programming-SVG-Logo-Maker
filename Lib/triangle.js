const Shape = require("./shape");
//The exten,ds keyword can be used to subclass custom classes,
//the custom class is shape.
class Triangle extends Shape {
  constructor(data) {
    //The super() keyword in JavaScript is used to call the constructor of a parent class from a child clas
    super(data);
  }
  render() {
    //The <polygon> element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point.
    return `<polygon points="100 0, 0 ,0 50, 100" fill="${this.logoColor}" />`;
  }
}

module.exports =  Triangle ;

