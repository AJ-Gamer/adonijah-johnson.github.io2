/**
 * 0. Data types are different kinds of date used and stored within code for different purposes depending on the type of data being used.
 * These data types consist of numbers, strings, booleans, arrays, objects, functions, undefined, null, NaN, infinity and -infinity.
 * 1. Number data is any data that is strictly a number. ex: 369
 * 2. String data is any data contained within quotation marks are strings. ex: "string", 'string'
 * 3. Boolean data is strictly date that is true or false. ex: true, false
 * 4. Arrays are sets of data contained with sqaure brackets and can be any type of data. ex: var array = ['string', 23, true]
 * 5. Objects are  a collection of properties, and a property is an association between a name (or key) and a value. ex: var object = {name: "AJ", age: 18}
 * 6. Functions are a set of statements that performs a task or calculates a value after taking in an input and gives the calculated output.
 * 7. Undefined is an output given for variables and functions that are not defined with a proper or correct value.
 * 8. Null represents the intentional absence of any object value.
 * 9. NaN is an output given for values that are not numbers but are attemping to be used as number values.
 * 10. Infinity is a property of the global object that is greater than any other number.
 * 11. -infinity is also a property of the global object and is less than any other number
 */

//1.Array
//This will show an example of an array with multiple data types
var arr = [1, 2, 3, 500, 700, "strings", "superheros", 'data', true, false, NaN, null, undefined, ];

//2. Object
//this will show an object example
var obj = {number: 60,
           string: "strings",
          boolean: true};

//3. Function
//There are plenty of examples for functions but a basic function example would be to give a function an input, that performs a task for a calculated output
function fullName(firstName, lastName) {return firstName + lastName};
console.log(fullName("Adonijah", "Johnson"));

//4. Undefined
//This variable has no value and thus it is undefined
var defined
console.log(defined) //undefined

//5. null
//Null simply means that there is no value for an given variable or function
var ex = null
if (ex === 0) {console.log("I don't have value.")}; //logs "I don't have value", because 0 in itself is an abcense of value.

//6. NaN
//NaN processes value to determine if it is a number or not
var sum = 1 + "2";
console.log(sum) //NaN

//7. Infinity and -Infinity
//These values are the highest and lowest numerical values
var greatest = 90000000 < Infinity
var least = -9000000000 > -Infinity