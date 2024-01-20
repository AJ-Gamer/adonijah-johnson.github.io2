/**
 * VARIABLES
 * 
 * 0. A variable is a container for a value of a data type that it is pointing towards, like a number, boolean, or string
 * for example. These are called variables because they retain the ability to have their value changed via various methods.
 * Variables allow programmers to store and manipulate their code in a maintainable and organizable fashion. There are three
 * types of variable declarations, var, let, and const, these diffrentiate based on their scope and the way that they contain
 * data. The "scope" is where these variables are available for use.
 * Var declarations are globally scoped or locally scoped. The scope is global when a var variable is declared outside a function. 
 * This means that any variable that is declared with var outside a function code block is available for use in the whole 
 * window. Var is locally scoped when it is declared within a function, meaning that it is only available accessible within
 * that function. Var can also be redeclared by retyping var followed by the same id as an already defined variable and giving
 * it a different value, however simply calling the variable by it's id and then giving it a different value, you can update it. 
 * Variables have a final mechanism called "hoisting", which is where declarations are moved to the top of their scope before
 * execution. Var variables are hoisted to the top of their scope and initialized with a value of undefined.
 * Let declarations are block scoped, a block is any data contained within {} braces. Let delcarations can be updated but not
 * redeclared. Let declarations are hoisted to the top, but unlike var which is initialized as undefined, the let keyword is not
 * initialized, meaning that if you try to use a let variable before declaring it, you will get a reference error.
 * Variables declared with the const maintain constant values, which means it cannot be updated or redeclared, and can only be
 * accessed within the block they were declared. Const declarations are hoisted to the top but are not initialized.
 * 
 *
 * 1. To create a variable type var, let, or const followed by an id that pertains to the use that you have for this varaible.
 * This is called "declaring" a variable.
 * 2.To assign the variable a value you should place the = operator behind the id, pointing towards the data value that you want
 * the variable to be assigned too. ex: var declaration = "assignment", this can alo be referred to as initilization of a variable. 
 */

//1. Declaration
// In this phase, the variables are declared but undefined, they exist but have no value
var example;
let exampleOne;
console.log(example) //this function logs data to the console, and this example will log undefined
console.log(exampleOne) //undefined

//2. Assignemnt
//Now the variables are being defined
example = "value"
exampleOne = "value2"
const exampleTwo = "unchangable"
console.log(example) //will log value
console.log(exampleOne) //will log value2
console.log(exampleTwo) //will log unchangable

//3. Re-assignemnt
//This is the process and results of reassinging a variable
var example = "VALUES"
let exampleOne = "2Values"
const exampleTwo = "changable"
console.log(example) //will log VALUES
console.log(exampleOne) //will log value2
console.log(exampleTwo) //will log unchangable

//4. Updating
//This is the process and results of updating a variable
example = "updated value"
exampleOne = "2nd updated value"
exampleTwo = "updated"
console.log(example) //will log updated value
console.log(exampleOne) //will log 2nd updated value
console.log(exampleTwo) //will log unchangable

//5. Hoisting
//this is how the code is read within its scope
//example of code
console.log (greeter);
var message = "hello user"
let greeting = "say Hi";
    greeting = "say Hello instead";
//hoisted code
var message;
console.log(message); // message is undefined
message = "hello user"
let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
//let and const would have the same result in this instance.

//6. Scope