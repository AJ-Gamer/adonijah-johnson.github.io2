// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if (n < 0){
    return null
  }
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  let sum = 0;
  array.forEach(function(element) {
    if (Array.isArray(element)) {
      sum += arraySum(element);
    } else {
      sum += element;
    }
  });
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  // Ensure n is a non-negative integer
  n = Math.abs(Math.round(n));

  // Base case: if n is 0, it's even; if n is 1, it's odd
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    // Recursive case: subtract 2 from n until reaching the base case
    return isEven(n - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, currentSum = 0) {
  // Base case: if n is equal to 0, return the current sum
  if (n === 0) {
    return currentSum;
  }

  // Add n-1 (or n+1 for negative n) to the current sum
  return sumBelow(n - (n > 0 ? 1 : -1), currentSum + (n > 0 ? n - 1 : n + 1));
};


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  if (x >= y) {
    return [];
  } else if (x + 1 === y) {
    return [];
  } else {
    var result = range(x + 1, y);
    result.unshift(x + 1);
    return result;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1; // Base case: any number to the power of 0 is 1
  }
  
  if (exp > 0) {
    return base * exponent(base, exp - 1); // Recursive case: multiply base by exponent(base, exp-1)
  } else {
    // If exp is negative, calculate the reciprocal of the positive exponent
    return 1 / exponent(base, -exp);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true; // Base case: 1 is a power of two
  } else if (n < 1 || n % 2 !== 0) {
    return false; // Base case: numbers less than 1 or odd are not powers of two
  }
  return powerOfTwo(n / 2); // Recursive case: check if n/2 is a power of two
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if (string === "") {
    return ""; // Base case: reverse of an empty string is an empty string
  }
  // Recursive case: concatenate last character with reverse of substring
  return string[string.length - 1] + reverse(string.slice(0, -1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // Helper function to remove spaces and convert to lowercase
  const cleanString = str => str.replace(/\s/g, '').toLowerCase();

  string = cleanString(string);

  if (string.length <= 1) {
    return true; // Base case: strings with 0 or 1 characters are palindromes
  }

  return string[0] === string[string.length - 1] && palindrome(string.slice(1, -1));
  // Recursive case: first and last characters are the same, and the substring in between is a palindrome
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (x < y) {
    return x; // Base case: remainder is x when x is less than y
  }
  return modulo(x - y, y); // Recursive case: subtract y from x until x is less than y
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  }

  if (y > 0) {
    return x + multiply(x, y - 1);
  } else {
    return -multiply(x, -y);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  if (x < y) {
    return 0; // Base case: quotient is 0 when x is less than y
  }
  return 1 + divide(x - y, y); // Recursive case: add 1 to quotient of x-y and y
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (y === 0) {
    return x; // Base case: gcd is x when y is 0
  }
  return gcd(y, x % y); // Recursive case: compute gcd of y and remainder of x divided by y
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1 === "" && str2 === "") {
    return true; // Base case: empty strings are identical
  }
  return str1[0] === str2[0] && compareStr(str1.slice(1), str2.slice(1));
  // Recursive case: first characters are the same, and the rest of the strings are identical
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str === "") {
    return []; // Base case: array is empty when string is empty
  }
  return [str[0]].concat(createArray(str.slice(1)));
  // Recursive case: concatenate array with first character of string and array created from the rest of the string
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length <= 1) {
    return array; // Base case: array with 0 or 1 elements is already reversed
  }
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, -1)));
  // Recursive case: concatenate last element with reversed array excluding the last element
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
    return []; // Base case: array is empty when length is 0
  }
  return [value].concat(buildList(value, length - 1));
  // Recursive case: concatenate array with given value with array created with length-1
};


// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0; // Base case: occurrence is 0 when array is empty
  }
  return (array[0] === value ? 1 : 0) + countOccurrence(array.slice(1), value);
  // Recursive case: add 1 if first element is equal to value, and count occurrence in the rest of the array
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return []; // Base case: result is an empty array when input array is empty
  }
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
  // Recursive case: apply callback to the first element and concatenate with recursive result on the rest of the array
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  let count = 0;
  for (let prop in obj) {
    if (prop === key) {
      count++; // Increment count if key is found in the current level of the object
    }
    if (typeof obj[prop] === 'object') {
      count += countKeysInObj(obj[prop], key); // Recursively count keys in nested objects
    }
  }
  return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;
  for (let prop in obj) {
    if (obj[prop] === value) {
      count++; // Increment count if value is found in the current level of the object
    }
    if (typeof obj[prop] === 'object') {
      count += countValuesInObj(obj[prop], value); // Recursively count values in nested objects
    }
  }
  return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  for (let prop in obj) {
    if (prop === key) {
      obj[newKey] = obj[prop]; // Rename key to newKey
      delete obj[prop]; // Delete old key
    }
    if (typeof obj[prop] === 'object') {
      replaceKeysInObj(obj[prop], key, newKey); // Recursively replace keys in nested objects
    }
  }
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return []; // Base case: empty array for non-positive n
  } else if (n === 1) {
    return [0]; // Base case: [0] for n = 1
  } else if (n === 2) {
    return [0, 1]; // Base case: [0, 1] for n = 2
  }
  let fibArray = fibonacci(n - 1);
  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  return fibArray;
  // Recursive case: generate Fibonacci numbers by summing the last two elements in the array
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null; // Base case: return null for negative index
  } else if (n === 0) {
    return 0; // Base case: 0 for index 0
  } else if (n === 1) {
    return 1; // Base case: 1 for index 1
  }
  return nthFibo(n - 1) + nthFibo(n - 2);
  // Recursive case: sum of the two previous Fibonacci numbers
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  if (input.length === 0) {
    return []; // Base case: empty array for empty input
  }
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
  // Recursive case: capitalize the first word and concatenate with the rest of the array
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) {
    return []; // Base case: empty array for empty input
  }
  return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
  // Recursive case: capitalize the first letter of the word and concatenate with the rest of the array
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let sum = 0;
  for (let prop in obj) {
    if (typeof obj[prop] === 'object') {
      sum += nestedEvenSum(obj[prop]); // Recursively sum even numbers in nested objects
    } else if (typeof obj[prop] === 'number' && obj[prop] % 2 === 0) {
      sum += obj[prop]; // Add even number to the sum
    }
  }
  return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  let flattened = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      flattened = flattened.concat(flatten(arrays[i])); // Recursively flatten nested arrays
    } else {
      flattened.push(arrays[i]); // Add non-array elements to the flattened array
    }
  }
  return flattened;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  if (str.length === 0) {
    return obj; // Base case: return the tally object for an empty string
  }
  let currentChar = str[0];
  obj[currentChar] = (obj[currentChar] || 0) + 1; // Increment tally for the current character
  return letterTally(str.slice(1), obj);
  // Recursive case: tally the remaining characters in the string
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  if (list.length <= 1) {
    return list; // Base case: list with 0 or 1 element has no consecutive duplicates
  }
  let compressed = [list[0]];
  for (let i = 1; i < list.length; i++) {
    if (list[i] !== list[i - 1]) {
      compressed.push(list[i]); // Add non-consecutive duplicates to the compressed list
    }
  }
  return compressed;
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return []; // Base case: empty array for empty input
  }
  return [[array[0], aug]].concat(augmentElements(array.slice(1), aug));
  // Recursive case: augment the first element with a new value and concatenate with the rest of the array
};


// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length <= 1) {
    return array; // Base case: array with 0 or 1 element has no consecutive zeroes
  }
  let minimized = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== 0 || array[i - 1] !== 0) {
      minimized.push(array[i]); // Add non-consecutive zeroes to the minimized array
    }
  }
  return minimized;
};


// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) {
    return array; // Base case: empty array for empty input
  }
  let alternated = [Math.abs(array[0])];
  if (array[0] !== 0) {
    alternated[0] *= -1; // Negate the first non-zero element
  }
  return alternated.concat(alternateSign(array.slice(1)));
  // Recursive case: alternate the sign of the remaining elements in the array
};


// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  const digitWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if (str === "") {
    return ""; // Base case: empty string remains empty
  } else if (/[0-9]/.test(str[0])) {
    return digitWords[parseInt(str[0])] + numToText(str.slice(1)); // Convert digit to word and concatenate with the rest
  } else {
    return str[0] + numToText(str.slice(1)); // Keep non-digit characters as they are
  }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  let count = 0;
  if (node.tagName === tag.toUpperCase()) {
    count++; // Increment count if the current node's tag matches the target tag
  }
  for (let i = 0; i < node.children.length; i++) {
    count += tagCount(tag, node.children[i]); // Recursively count tags in child nodes
  }
  return count;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min = 0, max = array.length - 1) {
  if (min > max) {
    return null; // Base case: target not found
  }
  let mid = Math.floor((min + max) / 2);
  if (array[mid] === target) {
    return mid; // Base case: target found at mid index
  } else if (array[mid] < target) {
    return binarySearch(array, target, mid + 1, max); // Recursive case: search in the right half
  } else {
    return binarySearch(array, target, min, mid - 1); // Recursive case: search in the left half
  }
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
  if (array.length <= 1) {
    return array; // Base case: array with 0 or 1 element is already sorted
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right)); // Merge the sorted left and right halves
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
