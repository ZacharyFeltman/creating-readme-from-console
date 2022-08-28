// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// //Description, insall instructions, usage info, contirbution guidlines
// // and test instructions.
const questions = [];
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      username: "username",
      message: "Please enter your GitHub username:",
    },
    {
      type: "input",
      name: "first and last name",
      message: "Please enter your first and last name:",
    },
    {
      type: "input",
      name: "project/name",
      message:
        "What is the project being installed? What is the projects name?",
    },
    {
      type: "list",
      name: "creation type",
      message: "How do you prefer creating a Readme File?",
      choices: "Console, Browser, Text Editor",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage for this application?",
    },
    {
      type: "input",
      name: "contributions",
      message: "were there any other contributors to this project?",
    },
    {
      type: "list",
      name: "License",
      message: "which license would you like to use?",
      list: "",
    },
    {
      type: "input",
      name: "tests",
      message: "what tests were run for this project?",
    },
  ]);
}

// TODO: Create a function to write README file
fs.appendFile("Readme.md", `${process.argv[2]}\n`, (error) =>
  error ? console.error(error) : console.log("Commit Logged")
);
function writeToFile(fileName, data) {}

/// TODO: Create a function to initialize app
function init() {}

// // Using a conditional statement
// if (a === b) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // Using a ternary operator
// console.log(a === b ? true : false)

// // Comparing variables
// console.log(a === b);

// // Comparing argument values directly
// console.log(process.argv[2] === process.argv[3]);
