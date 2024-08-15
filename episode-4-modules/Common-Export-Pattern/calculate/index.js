// Importing the arithmetic functions from their respective files within the calculate folder.
const {addition} = require("./Addition")
const {subtraction} = require("./Subtraction")
const {multiply} = require("./Multiplication")
const {divide} = require("./Divide")

// Exporting the imported functions as named exports.
// This allows these functions to be imported in a single statement in other files.
module.exports = {addition, multiply, divide, subtraction}