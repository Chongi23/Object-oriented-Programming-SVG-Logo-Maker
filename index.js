//Require inquirer to provide way to capture use input on Node.js CLI
const inquirer = require('inquirer');
const path = require('path');
//Require ('fs) to RAED and WRITE to the file system
const fs = require('fs');
const { genShape } = require('./Lib/genShape');
const { genSVG } = require('./Lib/genSVG');

 //Create an array of questions for user input in making SVG logo

 inquirer
 .prompt([
    {
        type: 'input',
        name:'logoLtrs',
        message: "Enter 3 letter for your logo, no more, no less",
    },

    {
        type :'input',
        name: 'logoTextColor',
        message:"What is the color you want text to be?",
    },

    {
        type: 'input',
        name: 'logoShapeColor',
        message:"What color would you like your logo? (ex: #012456  OR color name)",
    },

    {
        type: 'checkbox',
        name: 'logoShape',
        message: 'Choose a provided shape',
        choices:['square', 'circle', 'triangle'],

    },

])
//AFTER the user input , THEN we use that data ,
//We have a svgPath var with value of "./Examples/logo.svg"
//logoResult will have the value of genShape imported function with the parameter of data(from input)
.then((data) => {
  const svgPath = "./Examples/logo.svg";
  const logoResult = genShape(data);

  // Generates code to display logo
  fs.writeFile(svgPath, genSVG(logoResult), (err) =>
    err
      ? console.error(err)
      : console.log("Successfully generated logo into logo.svg")
  );
})
.catch((err) => console.error(err));

