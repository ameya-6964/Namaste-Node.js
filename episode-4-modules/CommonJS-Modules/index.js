// Destructuring the exported 'name' and 'getName' properties from 'anotherFile.js'
// 'require' is used to include these exports from another module.
let {name, getName} = require("./anotherFile.js");

// Destructuring the exported 'calculateSum' and 'multiply' properties from 'calculateSum.js'
let {calculateSum, multiply} = require("./calculateSum.js");

// Logging the 'name' variable imported from 'anotherFile.js' to the console.
console.log(name);

// Using the 'getName' function imported from 'anotherFile.js' with an argument "Ameya"
let a = getName("Ameya");
console.log(a);

// Calling the 'calculateSum' function imported from 'calculateSum.js' with arguments 1 and 2
calculateSum(1, 2);

// Calling the 'multiply' function imported from 'calculateSum.js' with arguments 1 and 3
multiply(1, 3);
