// Defining a variable 'name' with a string value.
let name = "Important Code From Another File";

// Function 'getName' accepts a 'name' parameter and returns it.
function getName(name) {
    return name;
}

// Exporting the 'getName' function and 'name' variable using ES module syntax.
// The 'export' keyword is used to make variables and functions available for import in other files.
export { getName, name };
