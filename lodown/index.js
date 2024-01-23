'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Designed to accept an input value and return it.
 * 
 * @param {value} datatypes: String, Number, Boolean, Array, Object, Function, Undefined, Null, NaN, Ifinity, & -Ifinity
 * 
 * @return {value}: This returns the given value.
 */
function identity(value){
    return value;
}
module.exports.identity = identity

/**
 * typeof: Designed to evaluate the type of date of a given value.
 * Array.isArray: A method designed to evaluate if a value is an array.
 * 
 * @param {value} datatypes: String, Number, Boolean, Array, Object, Function, Undefined, Null, NaN, Ifinity, & -Ifinity
 * 
 * @return {value}: This returns the type of the given value as a string.
 */
function typeOf(value){
  if (value === null) {
    return 'null';
  } else if (Array.isArray(value)) {
    return 'array';
  } else if (typeof value === 'string') {
    return 'string';
  } else if (typeof value === 'object') {
    return 'object';
  } else if (typeof value === 'undefined') {
    return 'undefined';
  } else if (typeof value === 'number') {
    return 'number';
  } else if (typeof value === 'boolean') {
    return 'boolean';
  } else if (typeof value === 'function') {
    return 'function';
  } else {
    return 'unknown'; // For any other types not specified
  }
}
module.exports.typeOf = typeOf

/**
 * first: Designed to return the first item in an array.
 * 
 * @param {array} array: stores multiple values and elements in one variable
 * @param {number} number: any numerical value
 * 
 * @return {array[0]}: Returns the first element in an array.
 */
function first(array, number){
  if (!Array.isArray(array)) {
    return [];
  }
  if (number === undefined || isNaN(number)){
    return array[0];
  }
  if (number <= 0){
      return []
  }
  return array.slice(0, number);
}
module.exports.first = first

/**
 * last: Designed to return the last element in an array.
 * 
 * @param {array} array: stores multiple values and elements in one variable
 * @param {number} number: any numerical value
 * 
 * @return {array.length - 1}: Returns the last element in an array.
 */
function last(array, number){
  if (!Array.isArray(array)) {
    return [];
  }
  if (number === undefined || isNaN(number)) {
    return array[array.length - 1];
  }
  if (number > array.length) {
    return array;
  }
  if (number <= 0){
      return []
  }
  return array.slice(array.length - number);
}
module.exports.last = last

/**
 * indexOf: Designed to return the index of an array, that is the first occurence of it's value.
 * 
 * @param {array} array: stores multiple values and elements in one variable
 * @param {value} datatypes: String, Number, Boolean, Array, Object, Function, Undefined, Null, NaN, Ifinity, & -Ifinity
 * 
 * @return {value}: Returns the first index of <value> in <array>.
 */
function indexOf(array, value){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
module.exports.indexOf = indexOf

/**
 * contains: Designed to determine if the given array contains the given value.
 * 
 * @param {array} array: stores multiple values and elements in one variable
 * @param {value} datatypes: String, Number, Boolean, Array, Object, Function, Undefined, Null, NaN, Ifinity, & -Ifinity
 * 
 * @return {value}: Returns true or false, based on if <array> contains <value>
 */
function contains(array, value){
  return (array.includes(value) === true) ? true : false;
}
module.exports.contains = contains

/**
 * unique: Designed to iterate over an array and return a new array with all duplicates of any values removed.
 * 
 * @param {array} array: stores multiple values and elements in one variable
 * @param {value} datatypes: String, Number, Boolean, Array, Object, Function, Undefined, Null, NaN, Ifinity, & -Ifinity
 * 
 * @return {array}: Returns an array with only one of each given value.
 */
function unique(array, value){
  var uniqueArray = [];
    for (var i = 0; i < array.length; i++) {
      if (_.indexOf(uniqueArray, array[i]) === -1) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray;
}
module.exports.unique = unique

/**
 * filter: Designed to call a provided callback function once for each element in an array,
 * and creates a new array of all the values, for which the callbackFn returns a truthy value.
 * 
 * @param {array} array: stores multiple values and elements in one variable
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * @return {array}: Returns a new array with values that returned true when passed to the callback function.
 */
function filter(array, func){
  var filteredArray = [];
  
    for (var i = 0; i < array.length; i++) {
      if (func(array[i], i, array)) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
}
module.exports.filter = filter

/**
 * reject: Designed to call a provided call function once for each element in an array and creates
 *  a new array of all the values, for which the callbackFn returns a falsey value.
 * 
 * @param {array} array: stores multiple values and elements in one variable
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * @return {array}: Returns a shallow copy of the given array containing just the elements that don't pass the test.
 */
function reject(array, func){
  var rejectedArray = [];
    for (var i = 0; i < array.length; i++) {
      if (!func(array[i], i, array)) {
        rejectedArray.push(array[i]);
      }
    }
    return rejectedArray;
}
module.exports.reject = reject

/**
 * partition: Designed to to separate the collection elements according to the given callback function.
 * The first array containing those elements that satisfy the predicate (condition),
 *  and the second array contains the remaining elements.
 * 
 * @param {array} array: stores multiple values and elements in one variable
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * @return {array}: Returns an array containing the elements that satisfy the given condition
 * and a second array contains the remaining elements.
 */
function partition(array, func){
  var truthyArray = [];
    var falsyArray = [];
    for (var i = 0; i < array.length; i++) {
      if (func(array[i], i, array)) {
        truthyArray.push(array[i]);
      } else {
        falsyArray.push(array[i]);
      }
    }
    return [truthyArray, falsyArray];
}
module.exports.partition = partition

/**
 * map: Designed to hold key-value pairs and remember the original input order of the keys.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * @return {array}: Returns a new array and elements of arrays are the result of the callback function.
 */
function map(collection, func){
  var mappedArray = [];
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        mappedArray.push(func(collection[i], i, collection));
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (var key in collection) {
        if (collection.hasOwnProperty(key)) {
          mappedArray.push(func(collection[key], key, collection));
        }
      }
    }
    return mappedArray;
}
module.exports.map = map

/**
 * pluck: Designed to return an array containing the value of <property> for every element in an array.
 * 
 * @param {array} array: stores multiple values and elements in one variable
 * @param {Property} Property: The values associated with a JavaScript object.
 * 
 * @return {array}: Returns an array of values corresponding to the specified object key.
 */
function pluck(arrayOfObjects, property){
  return _.map(arrayOfObjects, function(obj) {
    return obj[property];
  });
}
module.exports.pluck = pluck

/**
 * every: Designed to execute a function for each array element, The every() method returns true if the function
 * returns true for all elements and returns false if the function returns false for one element.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * @return {Boolean}: Returns true if the function returns true for all elements, and false if false returns for all elements.
 */
function every(collection, func){
  if (Array.isArray(collection)) {
    if (func === undefined) {
        for (let i = 0; i < collection.length; i++) {
            if (!collection[i]) {
                return false;
            }
        }
    } else {
        for (let i = 0; i < collection.length; i++) {
            if (!func(collection[i], i, collection)) {
                return false;
            }
        }
    }
} else if (typeof collection === 'object' && collection !== null) {
    if (func === undefined) {
        for (let key in collection) {
            if (collection.hasOwnProperty(key) && !collection[key]) {
                return false;
            }
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key) && !func(collection[key], key, collection)) {
                return false;
            }
        }
    }
}
return true;
}
module.exports.every = every

/**
 * some: Designed to checks if any array elements pass a test (provided as a callback function). 
 * The some() method executes the callback function once for each array element, once the some() method returns true
 *  for one of the array elements, the method stops.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * @return {Boolean}: returns true if, in the array, it finds an element for which the provided function returns true,
 * otherwise it returns false.
 */
function some(collection, func){
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (func === undefined) {
        if (collection[i]) {
          return true;
        }
      } else if (func(collection[i], i, collection)) {
        return true;
      }
    }
  } else if (typeof collection === 'object' && collection !== null) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (func === undefined) {
          if (collection[key]) {
            return true;
          }
        } else if (func(collection[key], key, collection)) {
          return true;
        }
      }
    }
  }
  return false;
}
module.exports.some = some

/**
 * reduce: Designed to run a "reducer" callback function over all elements in the array, in ascending-index order, 
 * and accumulates them into a single value. Every time, the return value of callbackFn is passed into callbackFn
 * again on next invocation as accumulator.
 * 
 * @param {Array} array: stores multiple values and elements in one variable
 * @param {Function} action: The Function to be applied to each value in the collection.
 * @param {Seed} seed: Gives the functions return value an initial value.
 * 
 * @return {value}: Returns the function's accumulated result.
 */
function reduce(array, func, seed){
let output;
  if (seed === undefined) {
    if (array.length === 0) {
      throw new Error("Reduce of empty array with no initial value");
    }
    output = array[0];
    for (let i = 1; i < array.length; i++) {
      output = func(output, array[i], i);
    }
  } else {
    output = seed;
    for (let i = 0; i < array.length; i++) {
       output = func(output, array[i], i);
    }
  }
  return output;
};
module.exports.reduce = reduce

/**
 * extend: Designed to create a class by inheriting properties and methods from existing classes..
 * 
 * @param {Object} targetObject - The class to be extended.
 * (Object): A collection of properties, and a property is an association between a name (or key) and a value.
 * @param {...Object} sourceObjects - Objects to copy key/value pairs from.
 * (Spread Syntax(...)): Allows an iterable, such as an array or string, to be expanded in places where zero or more arguments
 * or elements are expected. In an object literal, the spread syntax enumerates the properties
 * of an object and adds the key-value pairs to the object being created.
 * 
 * @return {subclass} - Modified version of the target class with copied properties.
 */

function extend(object1, ...restOfObjects){
  for (let i = 0; i < restOfObjects.length; i++) {
    const obj2 = restOfObjects[i];
    if (obj2 && typeof obj2 === 'object') {
      for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
          obj1[key] = obj2[key];
        }
      }
    }
  }
  return obj1;
}
module.exports.extend = extend