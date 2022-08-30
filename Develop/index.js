// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// //Description, insall instructions, usage info, contirbution guidlines
// // and test instructions.
const questions = [
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message:"enter your email",
  },
  {
    type: "input",
    name: "project_name",
    message:
      "What is the project being installed? What is the projects name?",
  },
  {
    type: "input",
    name: "description",
    message: "how would you describe this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage for this application?",
  },
  {
    type: "input",
    name: "installation",
    message:"what are the installation instructions?",
  },
  {
    type: "input",
    name: "contributions",
    message: "were there any other contributors to this project?",
  },
  {
    type: "list",
    name: "license",
    message: "which license would you like to use?",
    choices: ["GitHub","NPM","Bower"],
  },
  {
    type: "input",
    name: "tests",
    message: "what tests were run for this project?",
  },
];
function promptUser() {
  return inquirer.prompt(questions);
};

function writeToFile(data) {
  fs.appendFile("readme.md", data, (error) =>
  error ? console.error(error) : console.log("Commit Logged")
);
}

/// TODO: Create a function to initialize app
function init() {}
 
promptUser().then((answers)=> {
  writeToFile(`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`);
  writeToFile("# " + answers.project_name + "\n");
  writeToFile(`## Description
  ${answers.description}
  \n`)
  writeToFile(`## Table of Contents\n`)
  writeToFile(`1. [Installation](#installation)\n`)
  writeToFile(`2. [Usage](#usage)\n`)
  writeToFile(`3. [License](#license)\n`)
  writeToFile(`4. [Contributing](#contributing)\n`)
  writeToFile(`5. [Tests](#tests)\n`)
  writeToFile(`6. [Questions](#questions)\n`)
  writeToFile(`## Installation\n`)
  writeToFile(`${answers.installation}\n`)
  writeToFile(`## Usage\n`)
  writeToFile(`${answers.usage}\n`)
  writeToFile(`## License\n`)
  writeToFile(`This Project uses the ${answers.license} licensing\n`)
  writeToFile(`## Contributions\n`)
  writeToFile(`${answers.contributions}\n`)
  writeToFile(`## Tests\n`)
  writeToFile(`${answers.tests}\n`)
  writeToFile(`## Questions\n`)
  writeToFile(`[my GitHub profile](http://www.github.com/${answers.username})\n`)
  writeToFile(`You may contact me at ${answers.email} with additional questions. \n`)
});

