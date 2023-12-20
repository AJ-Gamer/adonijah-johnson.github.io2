// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
  // Create a variable to store the reversed string
  var reversedString = '';

  // Iterate through the input string in reverse order
  for (let i = input.length - 1; i >= 0; i--) {
    // Add each character to the reversed string
    reversedString += input[i];
  }

  return reversedString;
}

// Now you can call the function to test it
var originalString = '.gnol oot yleritne koot sihT';
let reversed = reverseString(originalString);
console.log(reversed); // Output: 'This took entirely too long.'

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}