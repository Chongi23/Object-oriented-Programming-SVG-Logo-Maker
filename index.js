const inquirer = require('inquirer');
const fs = require('fs');
const fileName = "./Examples/logo.svg";
const questions = require(/Lib/questions.js);
const shapes = require('./lib.shapes.js')

//Function to create SVG file using the inquirer promt response and file system(fs)
function createLogo(response) {
    const svg = shapes(response);
    fs.writeFile(fileName, svg, () => 
    console.log("SVG File Created Successfully!"));
}

//Initialization, createLogo using question prompts(inquirer), will also catch errors

