// TODO: Include packages needed for this application
const fs = require('fs');


//TODO: Create an array of questions for user input
// //Description, insall instructions, usage info, contirbution guidlines
// // and test instructions.
// const questions = [];

// TODO: Create a function to write README file
fs.appendFile('Readme.md', `${process.argv[2]}\n`, (error) =>
    error ? console.error(error) : console.log('Commit Logged'))
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}
 
// // Function call to initialize app
// init();


// // appendFile() takes in 3 arguments: path, data, and callback function
//   // Ternary operator takes in a condition followed by a question mark (?)
//   // then an expression to execute if the condition is truthy followed by a colon (:)
//   // and finally the expression to execute if the condition is falsy.
//   // This operator is frequently used as a shortcut for the if statement.
//   err ? console.error(err) : console.log('Commit logged!')
// );




// const a = process.argv[2];
// const b = process.argv[3];

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

