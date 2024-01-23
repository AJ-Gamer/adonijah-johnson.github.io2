/**
 * LOOPS
 * 
 * 0. Loops in JavaScript are structures that allow you to repeatedly execute a block of code as long as a specified condition
 * is true. They are used to automate repetitive tasks, iterate over data structures, and control the flow of the program.
 * There are various types of loops, including while, for, and for-in loops.
 * 
 * 1. While, For, and For-In Loops:
 * - While Loop: Executes a block of code as long as a specified condition is true. Useful when you don't know the number
 *   of iterations beforehand and want to continue looping as long as a condition is met.
 *   Example:
 *   var count = 0;
 *   while (count < 5) {
 *     console.log(count);
 *     count++;
 *   }
 * 
 * - For Loop: Repeats a block of code for a specified number of times. Ideal when you know the exact number of iterations
 *   needed and want a more concise syntax.
 *   Example:
 *   for (var i = 0; i < 5; i++) {
 *     console.log(i);
 *   }
 * 
 * - For-In Loop: Iterates over the properties of an object. Useful for iterating through object properties and performing
 *   actions based on each property.
 *   Example:
 *   var person = { name: 'John', age: 25 };
 *   for (var key in person) {
 *     console.log(key + ': ' + person[key]);
 *   }
 * 
 * 2. Examples to Loop Any Number of Times, Forward Counting Up to Some Limit, Backward Counting Down to 0:
 *   - Loop any number of times: Handy when you need to iterate a specific number of times based on a variable or condition.
 *     for (var i = 0; i < n; i++) {
 *       console.log(i);
 *     }
 *   - Forward counting up to some limit: Perfect for scenarios where you want to count upwards starting from a specified value.
 *     for (var i = 1; i <= limit; i++) {
 *       console.log(i);
 *     }
 *   - Backward counting down to 0: Useful when you need to perform actions in reverse order, such as reversing an array.
 *     for (var i = n; i >= 0; i--) {
 *       console.log(i);
 *     }
 * 
 * 3. Examples to Loop Over an Array, Forwards and Backwards:
 *   - Loop over an array forwards: Commonly used to iterate through each element of an array from the beginning.
 *     var arr = [1, 2, 3, 4, 5];
 *     for (var i = 0; i < arr.length; i++) {
 *       console.log(arr[i]);
 *     }
 *   - Loop over an array backwards: Useful when you need to process array elements in reverse order.
 *     for (var i = arr.length - 1; i >= 0; i--) {
 *       console.log(arr[i]);
 *     }
 * 
 * 4. Loop Over an Object:
 *   - Loop over an object: Employed to iterate through the properties of an object and perform actions based on each property.
 *     var person = { name: 'Alice', age: 30, city: 'New York' };
 *     for (var key in person) {
 *       console.log(key + ': ' + person[key]);
 *     }
 * 
 * Loops are powerful constructs that provide flexibility and efficiency in handling repetitive tasks and iterating over data structures.
 */
