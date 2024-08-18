# CommonJS Modules Explanation

## File: `anotherFile.js`

### Description:

- This file defines a variable and a function, both of which are exported for use in other files.

### Key Points:

- `let name = "Important Code From Another File";`

  - Declares a variable `name` and assigns it the string `"Important Code From Another File"`.

- `function getName(name) { 
return name }`

  - Defines a function `getName` that accepts a parameter `name` and returns it.

- `module.exports = { getName, name };`
  - Exports the `getName` function and `name` variable, making them available for import in other modules using `require`.

## File: `calculateSum.js`

### Description:

- This file defines two functions, `calculateSum` and `multiply`, and exports them for use in other files.

### Key Points:

- `console.log("Calculate Sum Code Executed");`

  - Logs a message to the console when the module is loaded, indicating that the code has been executed.

- `function calculateSum(a, b) { console.log("Sum Is " + (a + b)); return a + b; }`

  - Defines a function `calculateSum` that accepts two parameters, logs their sum, and returns it.

- `function multiply(a, b) { console.log("Multiply Value Is " + (a * b)); return a * b; }`

  - Defines a function `multiply` that accepts two parameters, logs their product, and returns it.

- `module.exports = { calculateSum, multiply };`
  - Exports the `calculateSum` and `multiply` functions, making them available for import in other modules using `require`.

## File: `index.js`

### Description:

- This file demonstrates how to import and use the functions and variables from `anotherFile.js` and `calculateSum.js` using CommonJS modules.

### Key Points:

- `let { name, getName } = require("./anotherFile.js");`

  - Imports the `name` variable and `getName` function from `anotherFile.js` using destructuring.

- `let { calculateSum, multiply } = require("./calculateSum.js");`

  - Imports the `calculateSum` and `multiply` functions from `calculateSum.js` using destructuring.

- `console.log(name);`

  - Logs the value of `name` (imported from `anotherFile.js`) to the console.

- `let a = getName("Ameya"); console.log(a);`

  - Calls the `getName` function with the argument `"Ameya"` and logs the returned value to the console.

- `calculateSum(1, 2);`

  - Calls the `calculateSum` function with the arguments `1` and `2`, logging and returning their sum.

- `multiply(1, 3);`
  - Calls the `multiply` function with the arguments `1` and `3`, logging and returning their product.

## Summary

- The code demonstrates how to create and use CommonJS modules in Node.js.
- `anotherFile.js` defines and exports a variable and a function.
- `calculateSum.js` defines and exports two functions.
- `index.js` imports and utilizes these exported functions and variables to perform operations and log outputs to the console.

<hr>
<br>

# ES Modules Explanation

## File: `anotherFile.js`

### Description:

- This file defines a variable and a function, both of which are exported using ES module syntax.

### Key Points:

- `let name = "Important Code From Another File";`

  - Declares a variable `name` and assigns it the string `"Important Code From Another File"`.

- `function getName(name) { return name; }`

  - Defines a function `getName` that accepts a parameter `name` and returns it.

- `export { getName, name };`
  - Exports the `getName` function and `name` variable using ES module syntax. The `export` keyword allows these to be imported in other modules using `import`.

## File: `calculateSum.js`

### Description:

- This file defines two functions, `calculateSum` and `multiply`, and exports them using ES module syntax.

### Key Points:

- `console.log("Calculate Sum Code Executed");`

  - Logs a message to the console when the module is loaded, indicating that the code has been executed.

- `function calculateSum(a, b) { console.log("Sum Is " + (a + b)); return a + b; }`

  - Defines a function `calculateSum` that accepts two parameters, logs their sum, and returns it.

- `function multiply(a, b) { console.log("Multiply Value Is " + (a * b)); return a * b; }`

  - Defines a function `multiply` that accepts two parameters, logs their product, and returns it.

- `export { calculateSum, multiply };`
  - Exports the `calculateSum` and `multiply` functions using ES module syntax. This makes them available for import in other modules using `import`.

## File: `index.js`

### Description:

- This file demonstrates how to import and use the functions and variables from `anotherFile.js` and `calculateSum.js` using ES Modules.

### Key Points:

- `import { name, getName } from './anotherFile.js';`

  - Imports the `name` variable and `getName` function from `anotherFile.js` using the ES module `import` statement.

- `import { calculateSum, multiply } from './calculateSum.js';`

  - Imports the `calculateSum` and `multiply` functions from `calculateSum.js` using the ES module `import` statement.

- `console.log(name);`

  - Logs the value of `name` (imported from `anotherFile.js`) to the console.

- `let a = getName("Ameya"); console.log(a);`

  - Calls the `getName` function with the argument `"Ameya"` and logs the returned value to the console.

- `calculateSum(1, 2);`

  - Calls the `calculateSum` function with the arguments `1` and `2`, logging and returning their sum.

- `multiply(1, 3);`
  - Calls the `multiply` function with the arguments `1` and `3`, logging and returning their product.

## File: `package.json`

### Description:

- This file is used to manage the project and specify that the module type is ES Modules.

### Key Points:

- `"type": "module"`
  - This key-value pair specifies that the files in this project use ES Modules. This is essential for using the `import` and `export` syntax in Node.js.

## Comparison Between CommonJS and ES Modules

### Similarities:

- Both CommonJS and ES Modules allow the definition of variables and functions in one file and their use in another.
- Both can be used to structure Node.js applications into smaller, manageable pieces.

### Differences:

- **Syntax:**

  - CommonJS uses `require()` for importing and `module.exports` for exporting.
  - ES Modules use `import` for importing and `export` for exporting.

- **Default Export:**

  - CommonJS allows exporting a single item as the default export using `module.exports = item`.
  - ES Modules use `export default item` for default exports but also support named exports.

- **Execution:**

  - CommonJS modules are loaded synchronously, which means they block the code execution until the module is loaded.
  - ES Modules can be loaded asynchronously, allowing for better performance in certain situations.

- **Usage:**
  - ES Modules are a newer standard and are preferred for modern JavaScript development, while CommonJS has been the traditional module system in Node.js.

## Summary

- The ES Modules code in this project demonstrates how to use the modern module system in Node.js, which offers cleaner syntax and better compatibility with JavaScript's evolving ecosystem.
- The comparison highlights the key differences between CommonJS and ES Modules, aiding in understanding which module system might be more suitable for a given project.

<br>
<hr>

# CommonJS Export Pattern Explanation

## Directory: `calculate`

### 1. File: `Addition.js`

#### Description:

- This file contains the function to perform addition.

#### Key Points:

- `function addition(a, b) { return \`Sum Is ${a + b}` }`

  - Defines a function `addition` that accepts two parameters, calculates their sum, and returns it as a formatted string.

- `module.exports = { addition };`
  - Exports the `addition` function using `module.exports`, making it available for import in other modules.

### 2. File: `Subtraction.js`

#### Description:

- This file contains the function to perform subtraction.

#### Key Points:

- `function subtraction(a, b) { return \`Subtracted Value Is ${a - b}\`; }`

  - Defines a function `subtraction` that accepts two parameters, calculates their difference, and returns it as a formatted string.

- `module.exports = { subtraction };`
  - Exports the `subtraction` function using `module.exports`, making it available for import in other modules.

### 3. File: `Multiply.js`

#### Description:

- This file contains the function to perform multiplication.

#### Key Points:

- `function multiply(a, b) { 
return \`Multiplied Value Is ${a \* b}\`; }`

  - Defines a function `multiply` that accepts two parameters, calculates their product, and returns it as a formatted string.

- `module.exports = { multiply };`
  - Exports the `multiply` function using `module.exports`, making it available for import in other modules.

### 4. File: `Divide.js`

#### Description:

- This file contains the function to perform division.

#### Key Points:

- `function divide(a, b) { return \`After Division On ${a} and ${b} Quotient Is ${a / b} And Remainder Is ${a % b}\`; }`

  - Defines a function `divide` that accepts two parameters, calculates their quotient and remainder, and returns the results as a formatted string.

- `module.exports = { divide };`
  - Exports the `divide` function using `module.exports`, making it available for import in other modules.

### 5. File: `index.js` (Inside `calculate` Directory)

#### Description:

- This file imports the arithmetic functions from the respective files within the `calculate` folder and re-exports them.

#### Key Points:

- `const { addition } = require("./Addition");`

  - Imports the `addition` function from `Addition.js`.

- `const { subtraction } = require("./Subtraction");`

  - Imports the `subtraction` function from `Subtraction.js`.

- `const { multiply } = require("./Multiply");`

  - Imports the `multiply` function from `Multiply.js`.

- `const { divide } = require("./Divide");`

  - Imports the `divide` function from `Divide.js`.

- `module.exports = { addition, multiply, divide, subtraction };`
  - Re-exports the imported functions, allowing them to be imported in a single statement in other files.

## Root `index.js`

### Description:

- This file imports the arithmetic functions from `calculate/index.js` and uses them to perform various operations.

### Key Points:

- `const { addition, subtraction, divide, multiply } = require("./calculate/index");`

  - Destructures and imports the arithmetic functions from the `calculate/index.js` file.

- `let additionResult = addition(10, 20);`

  - Calls the `addition` function with `10` and `20` as arguments and stores the result.

- `let subtractionResult = subtraction(20, 10);`

  - Calls the `subtraction` function with `20` and `10` as arguments and stores the result.

- `let multiplicationResult = multiply(10, 20);`

  - Calls the `multiply` function with `10` and `20` as arguments and stores the result.

- `let divisionResult = divide(20, 10);`

  - Calls the `divide` function with `20` and `10` as arguments and stores the result.

- `console.log(additionResult); console.log(subtractionResult); console.log(multiplicationResult); console.log(divisionResult);`
  - Logs the results of the arithmetic operations to the console.

## Summary

- The `CommonJS-Export-Pattern` demonstrates how to organize and export multiple related functions using the CommonJS module system.
- The individual arithmetic functions are defined in separate files within the `calculate` directory and then re-exported in `calculate/index.js`.
- The root `index.js` file imports and uses these functions to perform arithmetic operations, showcasing the power of modular code in Node.js.
