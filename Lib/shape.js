//NPM packag to check whether a supplied string is a valid CSS 3 compatible color value
//We will use this for the text/shape color
const isCss3Color = require("is-css3-color");

class Shape {
    constructor({ logoLtrs, logoTextColor, logoShape, logoShapeColor }) {
        //Check if all parameters are provided and of correct type. If not throw an error
        this.logoShape = logoShape;

        this.validateTextResponse(logoLtrs);
        this.logoLtrs = logoLtrs;

        this.validateColorResponse(logoTextColor);
        this.logoTextColor = logoTextColor;

        this.validateColorResponse(logoShapeColor);
        this.logoShapeColor = logoShapeColor;

    }
     //Text Validation Section

    ifResponseEmpty(input) {
        if (!input) throw new Error("Input cannot be empty");
    }

    validateTextResponse(input) {
        this.ifResponseEmpty(input);

        if (input.lenth > 3) {
            throw new Error("Text cannot be more than 3 characters");
        }
    }

// Color Validation Section
validateColorResponse(input) {
    this.ifResponseEmpty(input);
    //Changes all css named colors to lowercase, uniformity, not bug up package
    //input = input.toLowerCase();

    if(!isCss3Color(input)) {
        throw new Error("Enter Valid hex code or CSS color");
    }
}

render() {
    throw new Error("Child shapes need to use render() method");

}

}

//We will import this in other files, that is why we export it
module.exports=Shape;