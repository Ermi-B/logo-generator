const inquirer = require("inquirer");
const fs = require("fs")

const Circle = require("./lib/circle");
const Triangle = require("./lib/triangle");
const Square = require("./lib/square");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your logo text (limit to 3 characters only): ",
      name: "logoText",
      validate: function (input) {
        //validating that user inputs less than 3 characters
        if (input.length > 0 && input.length <= 3) {
          return true;
        } else {
          return 'Please enter up to 3 characters for your logo text!';
        }
      },
    },
    {
      type: "input",
      message: "what is your color choice? (Enter color keyword or hex code): ",
      name: "logoColor",
      default:"green" //will be default if user didnt input any color
    },
    {
      type: "list",
      message: "Choose a shape for your logo: ",
      name: "logoShape",
      choices:['Triangle','Circle','Square']
    },
  ])
  .then((data) => {
    //write logo.svg here
    const { logoText,logoColor,logoShape } = data //destructuring the prompt answers
    let output;
    //checking what shape is chosen and creating instance of the corresponding class and calling render( )
    switch(logoShape){
      case 'Triangle':
        const triangle = new Triangle(logoText,logoShape);
        triangle.setColor(logoColor)
        output = triangle.render()
        break;
      case 'Circle':
        const circle = new Circle(logoText,logoShape);
        circle.setColor(logoColor)
        output = circle.render()
        break;
      case 'Square':
        const square = new Square(logoText,logoShape);
        square.setColor(logoColor)
        output = square.render()
        break;
    }
   //write output variable to file logo.svg
   //it generates unique file name adding date and logo text on its file name
    fs.appendFile(`./examples/logo_${logoText}_${Date.now()}.svg`,output,(err)=>{
      err?console.error(err):console.log("Generated logo.svg");
    })
    
});
