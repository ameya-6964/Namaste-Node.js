// Importing functions from the calculate/index.js file using CommonJS require method.
// The imported functions are destructured for easy access and usage.
const { addition, subtraction, divide, multiply } = require("./calculate/index");

// Using the imported functions to perform arithmetic operations.
let additionResult = addition(10, 20);
let subtractionResult = subtraction(20, 10);
let multiplicationResult = multiply(10, 20);
let divisionResult = divide(20, 10);

// Logging the results of the operations to the console.
console.log(additionResult);      // Outputs: 30
console.log(subtractionResult);   // Outputs: 10
console.log(multiplicationResult); // Outputs: 200
console.log(divisionResult);      // Outputs: 2
