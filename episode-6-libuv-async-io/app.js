console.log("1: Start of script");  // Synchronous code - executed immediately

setTimeout(() => {
    console.log("2: Inside setTimeout");  // Timer callback - executed after the synchronous code
}, 0);

Promise.resolve().then(() => {
    console.log("3: Inside Promise");  // Microtask - executed after synchronous code, before timer callbacks
});

console.log("4: End of script");  // Synchronous code - executed immediately

// Simulate an asynchronous I/O operation
const fs = require('fs');
fs.readFile(__filename, () => {
    console.log("5: Inside fs.readFile callback");  // I/O callback - executed after all timers and microtasks
});
