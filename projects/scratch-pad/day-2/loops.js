// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
  // Test array for the function to loop over
  var arrNumbers = [1, 2, 3, 4, 5]
console.log(printArrayValues(arrNumbers))
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}
  // Test array for the function to loop over
  var reverseNumbers = [1, 2, 3, 4, 5]
  console.log(printArrayValuesInReverse(reverseNumbers))
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  return Object.keys(object);
}
  //creating object to input to the function.
var chaosObject = {
  name: "Sonic",
  age: 13,
  zone: "Green Hills, Montana",
};
 //Initialzing a variable that calls the function with the object.
var keysArray = getObjectKeys(chaosObject);
console.log(keysArray);
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}

printObjectKeys(chaosObject)
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
    // Use Object.values() to extract the values of the object and return them as an array
    return Object.values(object);
}
  var chaoticObject = {
    name: "Tails",
    age: 8,
    zone: "Green Hills, Montana",
  };

  var valuesArray = getObjectValues(chaoticObject);
  console.log(valuesArray);
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var valuesArray = Object.values(object);
  for (let value of valuesArray) {
    console.log(value);
  }
}
  

  printObjectValues(chaoticObject)
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  var keysArray = Object.keys(object);
  return keysArray.length;
}
  var angelObject = {
    name: "Knuckles",
    age: 15,
    zone: "Angel Island Zone"
  }
  var length = getObjectLength(angelObject);
  console.log(length);
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  valuesArray = Object.values(object);
  for (let i = valuesArray.length - 1; i >= 0; i--) {
    console.log(valuesArray[i]);
  }
}
   console.log(printObjectValuesInReverse(exampleObject)); 
  // YOUR CODE ABOVE HERE //





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
