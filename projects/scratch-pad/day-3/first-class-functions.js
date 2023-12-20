// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // Return a function that tests if a given value is greater than the base
    return function(value) {return value > base;
  };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // Return a function that tests if a given value is less than the base
  return function(value) {return value < base;
  };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //Convert startsWith to lowercase to make it case-insensitive
    startsWith = startsWith.toLowerCase();
    //Return a function that tests if a given string starts with startsWith character
    return function(inputString) {
    //Convert inputString to lowercase for case-insensitive comparison
    inputString = inputString.toLowerCase()
    //Check if the inputString starts with the startsWith chatacter
    return inputString.startsWith(startsWith)
   };
    // YOUR CODE ABOVE HERE //
} //Tested this code in replit and it seems to work fine.

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // Return a function that tests if a given string ends with the endsWith character
   //Convert endsWith to lowercase to make it case-insensitive
   endsWith = endsWith.toLowerCase();
    // Return a function that tests if a given string ends with endsWith character
    return function(inputString) {
    // Convert inputString to lowercase for case-insensitive comparison
    inputString = inputString.toLowerCase();
    // Check if the inputString ends with the endsWith character
    return inputString.endsWith(endsWith);
    };

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
 // Create an array to collect the modified strings
 var modifiedStrings = [];
 // Loop over the input strings
 for (let i = 0; i < strings.length; i++) {
   // Apply the modify function to the current string and add the result to the modified array
   modifiedStrings.push(modify(strings[i]));
 }
 // Return the array of modified strings
 return modifiedStrings;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // Loop over the input strings
  for (let i = 0; i < strings.length; i++) {
    // Apply the test function to the current string, if any string fails the test, return false
    if (!test(strings[i])) {return false;
    }
  } return true; // If all strings pass the test, return true
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
