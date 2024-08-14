let name = "Namaste Node.js";
let a = 10;
let b = 20;

console.log(name); // Outputs the string "Namaste Node.js" to the console
console.log(a + b); // Outputs the sum of 'a' and 'b' (10 + 20), which is 30

// Note: setTimeout and setInterval are part of Node.js global object APIs
// They are used to schedule functions to be executed after a delay or at repeated intervals.

// setTimeout schedules the function 'greet' to be executed after 2000 milliseconds (2 seconds)
setTimeout(function greet() {
    console.log("Welcome To Namaste Node.js From setTimeout");
}, 2000);

// setInterval schedules the function 'greet' to be executed every 5000 milliseconds (5 seconds)
setInterval(function greet() {
    console.log("Welcome To Namaste Node.js From setInterval");
}, 5000);
