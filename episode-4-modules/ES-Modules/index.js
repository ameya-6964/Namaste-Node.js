// Importing 'name' and 'getName' functions from 'anotherFile.js'.
// The 'import' statement is used in ES modules to bring in exported variables and functions from other files.
import { name, getName } from './anotherFile.js';

// Importing 'calculateSum' and 'multiply' functions from 'calculateSum.js'.
import { calculateSum, multiply } from './calculateSum.js';

// Logging the 'name' variable imported from 'anotherFile.js' to the console.
console.log(name);

// Using the 'getName' function imported from 'anotherFile.js' with an argument "Ameya"
let a = getName("Ameya");
console.log(a);

// Calling the 'calculateSum' function imported from 'calculateSum.js' with arguments 1 and 2
calculateSum(1, 2);

// Calling the 'multiply' function imported from 'calculateSum.js' with arguments 1 and 3
multiply(1, 3);
