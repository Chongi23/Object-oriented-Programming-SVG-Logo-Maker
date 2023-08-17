const Shape = require("./shape");
const genShape = require("./genShape");





//Function to generate SVG 
function genSVG(logoResult) {
console.log(logoResult);

  return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${logoResult.render()}
      <text
        x="50%"
         y="${logoResult.logoShape[0] != "triangle" ? "50%" : "40%"}"
        text-anchor="middle"
        fill="${logoResult.logoTextColor}"
        font-size="2.3rem" letter-spacing="2" dy=".3em"
        font-family="monospace">${logoResult.logoLtrs}
      </text>
    </svg>
    `;

 
}
  
  module.exports = { genSVG };
  