// Defining a variable 'name' with a string value.
let name = "Important Code From Another File";

// Function 'getName' accepts a 'name' parameter and returns it.
function getName(name) {
    return name;
}

// Exporting the 'getName' function and 'name' variable.
// This allows them to be imported in other files using 'require'.
module.exports = {getName, name};
