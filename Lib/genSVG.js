
const genShape = require("./genShape");

//const newShape = genShape(data);
//newShape.render();


//Function to generate SVG 
function genSVG(newShape) {


  return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${newShape.render()}
      <text
        x="50%"
        y="${newShape.logoShape != "triangle" ? "50%" : "40%"}"
        text-anchor="middle"
        fill="${newShape.logoTextColor}"
        font-size="2.3rem" letter-spacing="2" dy=".3em"
        font-family="monospace">${newShape.logoLtrs}
      </text>
    </svg>
    `;

 
}
  
  module.exports = { genSVG };
  