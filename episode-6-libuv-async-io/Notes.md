
# Node.js Event Loop Demonstration

This example illustrates how Node.js handles synchronous code, asynchronous tasks (like `setTimeout`), promises, and I/O operations using its event loop.

## Code Overview

```javascript
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
```

## Explanation

### 1. Synchronous Code Execution (Global Execution Context)
```javascript
console.log("1: Start of script");
```
- This line is synchronous and executed immediately.
- The message `1: Start of script` is printed to the console.

### 2. `setTimeout` - Scheduling a Timer
```javascript
setTimeout(() => {
    console.log("2: Inside setTimeout");
}, 0);
```
- `setTimeout` schedules an asynchronous task to execute after the specified delay (0 ms here).
- The callback is queued in the "timers" phase of the event loop.

### 3. `Promise.resolve().then()` - Microtask Execution
```javascript
Promise.resolve().then(() => {
    console.log("3: Inside Promise");
});
```
- `Promise.resolve()` creates a promise that resolves immediately.
- The `.then()` callback is added to the microtask queue, which is processed after the current synchronous code completes.

### 4. More Synchronous Code Execution
```javascript
console.log("4: End of script");
```
- Another synchronous operation that is executed immediately.
- The message `4: End of script` is printed to the console.

### 5. `fs.readFile` - Asynchronous I/O Operation
```javascript
const fs = require('fs');
fs.readFile(__filename, () => {
    console.log("5: Inside fs.readFile callback");
});
```
- `fs.readFile` is an asynchronous I/O operation. The callback is executed after the file is read.
- The callback is added to the "poll" phase of the event loop.

## Execution Order

1. Synchronous code is executed first.
2. Microtasks (like Promise callbacks) are executed next.
3. Timer callbacks (`setTimeout`) are executed after microtasks.
4. I/O callbacks (like `fs.readFile`) are executed last.

## Final Output

```
1: Start of script
4: End of script
3: Inside Promise
2: Inside setTimeout
5: Inside fs.readFile callback
```

## Summary

- **Synchronous Code**: Executed immediately.
- **Microtasks**: Promise resolutions, executed after the current synchronous block but before other asynchronous tasks.
- **Timers**: Executed after synchronous code and microtasks.
- **I/O Callbacks**: Executed after timers and microtasks.
