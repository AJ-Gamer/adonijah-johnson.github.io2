/**
 * STRING MANIPULATION
 * 
 * 0. Strings and String Manipulation:
 * Strings in JavaScript are sequences of characters, such as text, enclosed in single ('') or double ("") quotes.
 * String manipulation involves changing, combining, or extracting parts of strings to create new strings or modify existing ones.
 * 
 * 1. String Manipulation with Operators:
 * String manipulation can be achieved using operators like concatenation (+) and the compound assignment operator (+=).
 * Concatenation combines two or more strings, while the compound assignment operator updates the value of a variable by appending
 * a new string to it.
 * Example:
 * var firstName = "John";
 * var lastName = "Doe";
 * var fullName = firstName + " " + lastName; // Concatenation
 * console.log(fullName); // Outputs: John Doe
 * 
 * var greeting = "Hello";
 * greeting += " World"; // Compound assignment
 * console.log(greeting); // Outputs: Hello World
 * 
 * 2. String Manipulation with String Methods:
 * JavaScript provides various built-in string methods that simplify string manipulation tasks.
 * Examples:
 * var text = "JavaScript is fun!";
 * 
 * - Length: Returns the length of a string.
 *   var length = text.length; // length is 18
 * 
 * - To Upper/Lower Case: Converts a string to upper or lower case.
 *   var upperCase = text.toUpperCase(); // upperCase is "JAVASCRIPT IS FUN!"
 *   var lowerCase = text.toLowerCase(); // lowerCase is "javascript is fun!"
 * 
 * - Substring: Extracts a portion of a string.
 *   var subString = text.substring(0, 10); // subString is "JavaScript"
 * 
 * - Concat: Combines two or more strings.
 *   var combined = text.concat(" ", "And Exciting!"); // combined is "JavaScript is fun! And Exciting!"
 * 
 * - Index Of: Returns the index of the first occurrence of a specified value.
 *   var indexOfFun = text.indexOf("fun"); // indexOfFun is 13
 * 
 * String methods provide powerful tools for manipulating strings, making it easier to perform various operations on textual data.
 */
