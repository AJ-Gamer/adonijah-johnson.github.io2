/**
 * VARIABLES
 * 
 * 0. A variable is a container for a value of a data type that it is pointing towards, like a number, boolean, or string
 * for example. These are called variables because they retain the ability to have their value changed via various methods.
 * Variables allow programmers to store and manipulate their code in a maintainable and organizable fashion. There are three
 * types of variable declarations, var, let, and const; these differentiate based on their scope and the way that they contain
 * data. The "scope" is where these variables are available for use.
 * Var declarations are globally scoped or locally scoped. The scope is global when a var variable is declared outside a function. 
 * This means that any variable declared with var outside a function code block is available for use in the whole 
 * window. Var is locally scoped when it is declared within a function, meaning that it is only accessible within
 * that function. Var can also be redeclared by retyping var followed by the same id as an already defined variable and giving
 * it a different value. However, simply calling the variable by its id and then giving it a different value, you can update it. 
 * Variables have a final mechanism called "hoisting", which is where declarations are moved to the top of their scope before
 * execution. Var variables are hoisted to the top of their scope and initialized with a value of undefined.
 * Let declarations are block scoped; a block is any data contained within {} braces. Let declarations can be updated but not
 * redeclared. Let declarations are hoisted to the top, but unlike var, which is initialized as undefined, the let keyword is not
 * initialized. This means that if you try to use a let variable before declaring it, you will get a reference error.
 * Variables declared with const maintain constant values, which means they cannot be updated or redeclared and can only be
 * accessed within the block they were declared. Const declarations are hoisted to the top but are not initialized.
 *
 * 1. To create a variable, type var, let, or const followed by an id that pertains to the use that you have for this variable.
 * This is called "declaring" a variable.
 * 2. To assign the variable a value, you should place the = operator behind the id, pointing towards the data value that you want
 * the variable to be assigned to. ex: var declaration = "assignment"; this can also be referred to as the initialization of a variable. 
 */

//1. Declaration
// In this phase, the variables are declared but undefined; they exist but have no value
var example;
let exampleOne;
console.log(example); // This function logs data to the console, and this example will log undefined
console.log(exampleOne); // undefined

//2. Assignment
// Now the variables are being defined
example = "value";
exampleOne = "value2";
const exampleTwo = "unchangeable";
console.log(example); // Will log value
console.log(exampleOne); // Will log value2
console.log(exampleTwo); // Will log unchangeable

//3. Re-assignment
// This is the process and results of reassigning a variable
var example = "VALUES";
let exampleOne = "2Values";
const exampleTwo = "unchangeable";
console.log(example); // Will log VALUES
console.log(exampleOne); // Will log 2Values
console.log(exampleTwo); // Will log unchangeable

//4. Updating
// This is the process and results of updating a variable
example = "updated value";
exampleOne = "2nd updated value";
// The next line will result in an error because const variables cannot be updated
const exampleTwo = "updated";
console.log(example); // Will log updated value
console.log(exampleOne); // Will log 2nd updated value
console.log(exampleTwo); // Error: Assignment to constant variable

//5. Hoisting
// This is how the code is read within its scope
// Example of code
console.log(greeter);
var message = "hello user";
let greeting = "say Hi";
greeting = "say Hello instead";
// Hoisted code
var message;
console.log(message); // message is undefined
message = "hello user";
let greeting = "say Hi"; // Error: Identifier 'greeting' has already been declared
let greeting = "say Hello instead"; // let and const would have the same result in this instance.

//6. Scope
// Variables declared with var have function scope, meaning they are accessible throughout the function they are declared in.
// Variables declared with let and const have block scope, meaning they are only accessible within the block they are declared in.
// Example of function scope
function exampleScope() {
  if (true) {
    var localVar = "I am accessible throughout the function.";
  }
  console.log(localVar); // Will log "I am accessible throughout the function."
}

// Example of block scope
function exampleBlockScope() {
  if (true) {
    let blockVar = "I am only accessible within this block.";
    const constVar = "I am also only accessible within this block.";
  }
  console.log(blockVar); // Error: blockVar is not defined
  console.log(constVar); // Error: constVar is not defined
}