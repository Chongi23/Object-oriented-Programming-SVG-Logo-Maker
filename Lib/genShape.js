const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");


const genShape = (data) => {
    const { logoShape } = data;
    console.log(logoShape);
    let shape;
    switch (logoShape[0]) {
        case 'triangle' :
            shape = new Triangle(data);
            return shape;
           

            case 'square':
                shape=  new Square(data);
                return shape ;

                case 'circle':
                    shape = new Circle(data);
                    return shape;

                    default:
                        return "Whoops, looks like something went wrong!";
                       
        }
 };

 module.exports = { genShape } ;