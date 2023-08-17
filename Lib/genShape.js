const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");


const genShape = (data) => {
    const { logoShape } = data;
    switch (logoShape) {
        case "triangle" :
            const genTriangle = new Triangle(data);
            return genTriangle;
            break;

            case "square":
                const genSquare =  new Square(data);
                return genSquare ;
                break;

                case "circle":
                    console.log(data);
                    const genCircle=new Circle(data);
                    return genCircle;
                    break;

                    default:
                        return "Whoops, looks like something went wrong!";
                        break;
        }
 };

 module.exports = { genShape } ;