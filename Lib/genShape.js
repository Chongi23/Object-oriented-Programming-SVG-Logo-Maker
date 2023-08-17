const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");
const Shape = require("./shape");


const genShape = (data) => {
    const { logoShape } = data;
    let shape;
    switch (logoShape) {
        case 'triangle' :
            shape = new Triangle(data);
            //return genTriangle;
           
            break;

            case 'square':
                shape=  new Square(data);
                //return genSquare ;
                 break;

                case 'circle':
                    shape = new Circle(data);
                   // return genCircle;
                       break;

                    default:
                        return "Whoops, looks like something went wrong!";
                       
        }
 };

 module.exports = { genShape } ;