/**
 * FUNCTIONS
 * 
 * 0. Functions in JavaScript are reusable blocks of code that perform a specific task. They allow for better organization,
 * modularity, and abstraction in code.
 * 
 * 1. Two Phases for Using Functions:
 * - Declaration Phase: The function is defined or declared using the function keyword, a name, parameters (if any), and a
 *   code block.
 *   Example:
 *   function greet(name) {
 *     console.log("Hello, " + name + "!");
 *   }
 * 
 * - Execution Phase: The function is invoked or called, and the code inside the function is executed.
 *   Example:
 *   greet("John"); // Outputs: Hello, John!
 * 
 * 2. Difference Between Function Parameters and Arguments:
 * - Parameters: Variables listed in the function declaration that act as placeholders for values to be passed into the function.
 * - Arguments: Actual values passed into the function when it is called.
 *   Example:
 *   function add(num1, num2) {
 *     return num1 + num2;
 *   }
 *   var result = add(3, 5); // Parameters (num1, num2) = Arguments (3, 5)
 * 
 * 3. Syntax for a Named Function:
 *   function functionName(parameters) {
 *     // code block
 *   }
 *   Example:
 *   function greet(name) {
 *     console.log("Hello, " + name + "!");
 *   }
 * 
 * 4. Assigning a Function to a Variable:
 *   var multiply = function(num1, num2) {
 *     return num1 * num2;
 *   };
 *   var result = multiply(4, 6); // result is 24
 * 
 * 5. Specifying Inputs and Outputs:
 *   - Inputs: Defined by the parameters in the function declaration.
 *   - Outputs: Defined by the return statement inside the function. A function can optionally return a single value.
 *   Example:
 *   function square(num) {
 *     return num * num;
 *   }
 *   var squared = square(4); // squared is 16
 * 
 * 6. Scope and How Functions Treat Scope:
 * - Scope: Refers to the visibility and accessibility of variables within different parts of the code.
 * - Functions create their own scope. Variables declared inside a function are typically not accessible outside of it.
 *   Example:
 *   function exampleScope() {
 *     var localVar = "I'm inside the function";
 *     console.log(localVar);
 *   }
 *   exampleScope(); // Outputs: I'm inside the function
 *   console.log(localVar); // Error: localVar is not defined
 * 
 * 7. Closures:
 * - Closures occur when a function is defined within another function, and the inner function has access to the outer function's
 *   variables, even after the outer function has finished executing.
 *   Example:
 *   function outerFunction() {
 *     var outerVar = "I'm from the outer function";
 *     function innerFunction() {
 *       console.log(outerVar);
 *     }
 *     return innerFunction;
 *   }
 *   var closureExample = outerFunction();
 *   closureExample(); // Outputs: I'm from the outer function
 * 
 * Functions play a crucial role in structuring and organizing code, providing reusability and maintainability.
 */