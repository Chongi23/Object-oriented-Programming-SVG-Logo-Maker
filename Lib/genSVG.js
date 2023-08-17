const Shape = require("./shape");
const {genShape} = require("./genShape");


//const newShape = genShape(data);
//newShape.render();


//Function to generate SVG 
function genSVG(logoResult) {
console.log(logoResult);

  return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${logoResult.render()}
      <text
        x="50%"
        y="${Shape.logoShape != "triangle" ? "50%" : "40%"}"
        text-anchor="middle"
        fill="${Shape.logoTextColor}"
        font-size="2.3rem" letter-spacing="2" dy=".3em"
        font-family="monospace">${Shape.logoLtrs}
      </text>
    </svg>
    `;

 
}
  
  module.exports = { genSVG };
  