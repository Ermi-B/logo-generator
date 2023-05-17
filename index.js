const inquirer = require("inquirer");
const Circle = require("./lib/circle")
const Shapes = require("./lib/shapes")
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your logo text: ",
      name: "logoText",
    },
    {
      type: "input",
      message: "what is your color choice? (Enter color keyword or hex code): ",
      name: "logoColor",
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
    const shapes = new Shapes(data.logoText,data.logoColor,data.Shape)
    console.log(shapes.render())
    console.log("Generated logo.svg")
});
