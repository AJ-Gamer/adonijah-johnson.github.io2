 /**
  * DATA TYPES
  * 
 * 0. Data types are different kinds of data used and stored within code for different purposes depending on the type of data being used.
 * These data types consist of numbers, strings, booleans, arrays, objects, functions, undefined, null, NaN, Infinity, and -Infinity.
 * 1. Number data is any data that is strictly a number. ex: 369
 * 2. String data is any data contained within quotation marks; strings. ex: "string", 'string'
 * 3. Boolean data is strictly data that is true or false. ex: true, false
 * 4. Arrays are sets of data contained within square brackets and can be any type of data. ex: var array = ['string', 23, true]
 * 5. Objects are a collection of properties, and a property is an association between a name (or key) and a value. ex: var object = {name: "AJ", age: 18}
 * 6. Functions are a set of statements that perform a task or calculate a value after taking in an input and give the calculated output.
 * 7. Undefined is an output given for variables and functions that are not defined with a proper or correct value.
 * 8. Null represents the intentional absence of any object value.
 * 9. NaN is an output given for values that are not numbers but are attempting to be used as number values.
 * 10. Infinity is a property of the global object that is greater than any other number.
 * 11. -Infinity is also a property of the global object and is less than any other number.
 * 12. Primitive values are passed to a function by copy, complex values are passed by reference. 
 *     This means that when a primitive value is passed to a function, a copy of that value is created, and any changes
 *     made to the parameter inside the function do not affect the original value outside the function. 
 *     On the other hand, complex values, like arrays and objects, are passed by reference, so changes made to the parameter
 *     inside the function directly affect the original value outside the function.
 */

//1. Number
// Example of declaring and initializing a variable with a number
var numVar = 369;

//2. String
// Example of declaring and initializing a variable with a string
let strVar = "string";

//3. Boolean
// Example of declaring and initializing a variable with a boolean
const boolVar = true;

//4. Array
// Example of declaring and initializing a variable with an array
var arrVar = [1, 2, 3, 500, 700, "strings", "superheros", 'data', true, false, NaN, null, undefined];

//5. Object
// Example of declaring and initializing a variable with an object
let objVar = { number: 60, string: "strings", boolean: true };

//6. Function
// Example of declaring and initializing a variable with a function
const fullName = function (firstName, lastName) {
  return firstName + lastName;
};
console.log(fullName("Adonijah", "Johnson"));

//7. Undefined
// Example of declaring a variable without initializing it (undefined by default)
var undefinedVar;
console.log(undefinedVar); // Logs undefined

//8. Null
// Example of declaring and initializing a variable with null
let nullVar = null;

//9. NaN
// Example of NaN resulting from an invalid numerical operation
var nanVar = 1 + "2";
console.log(nanVar); // Logs NaN

//10. Infinity and -Infinity
// Examples of declaring and comparing with Infinity and -Infinity
var greatest = 90000000 < Infinity;
var least = -9000000000 > -Infinity;

//11. Copy by Value (Primitive Types)
// Example with numbers
let originalNum = 42;
let copiedNum = originalNum; // Copy by value
copiedNum = 100;
console.log(originalNum); // 42 (unchanged)

// Example with strings
let originalStr = "Hello";
let copiedStr = originalStr; // Copy by value
copiedStr = "World";
console.log(originalStr); // Hello (unchanged)

//12. Copy by Reference (Complex Types)
// Example with arrays
let originalArray = [1, 2, 3];
let copiedArray = originalArray; // Copy by reference
copiedArray.push(4);
console.log(originalArray); // Output: [1, 2, 3, 4] (changed)

// Example with objects
let originalObject = { key: "value" };
let copiedObject = originalObject; // Copy by reference
copiedObject.newKey = "newValue";
console.log(originalObject); // Output: { key: "value", newKey: "newValue" } (changed)