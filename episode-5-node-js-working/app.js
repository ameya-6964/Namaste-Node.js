//! When this line runs, Node.js executes the wrapped IIFE from calculate.js

const { add , subtract} = require('./calculate.js');

/*                   Working Of IIFE Behind The Scenes

(function (exports, require, module, __filename, __dirname) {
    // The original content of calculate.js goes here

    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }

    module.exports = {
        add,
        subtract
    };

})(module.exports, require, module, __filename, __dirname);

*/

const sum = calculate.add(5, 3);        // sum is 8
const difference = calculate.subtract(10, 4);  // difference is 6

console.log('Sum:', sum);               // Output: Sum: 8
console.log('Difference:', difference); // Output: Difference: 6
