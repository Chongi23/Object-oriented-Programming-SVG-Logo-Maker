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
     
    ifResponseEmpty(input) {
        if (!input) throw new Error("Input cannot be empty");
    }

    validateTextResponse(input) {
        this.ifResponseEmpty(input);

        if (input.lenth > 3) {
            throw new Error("Logo text cannot be more than 3 characters");
        }
    }


}