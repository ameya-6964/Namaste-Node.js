// Logging to the console when the 'calculateSum.js' module is loaded.
console.log(`Calculate Sum Code Executed`);

// Function 'calculateSum' accepts two parameters and logs and returns their sum.
function calculateSum(a, b) {
    console.log(`Sum Is ${a + b}`);
    return a + b;
}

// Function 'multiply' accepts two parameters and logs and returns their product.
function multiply(a, b) {
    console.log(`Multiply Value Is ${a * b}`);
    return a * b;
}

// Exporting the 'calculateSum' and 'multiply' functions.
// This makes them available for import in other files using 'require'.
module.exports = {calculateSum, multiply};
