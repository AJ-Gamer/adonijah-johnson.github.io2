/**
 * CONTROL FLOW
 * 
 * 0. Control flow refers to the order in which statements are executed in a program. It determines the direction
 * that the program takes based on conditions and decisions. Control flow structures include conditionals (if, else-if, else),
 * loops (for, while, do-while), and switches, which allow the program to make decisions and repeat actions.
 * 
 * 1. If Statement:
 * The if statement is used to execute a block of code if a specified condition is true. If the condition is false,
 * the code block will be skipped.
 * Example:
 * var age = 25;
 * if (age >= 18) {
 *   console.log('You are an adult.');
 * }
 * 
 * 2. Else-If Statement:
 * The else-if statement allows you to check multiple conditions sequentially. If the initial if condition is false,
 * the else-if condition will be evaluated, and if true, its code block will be executed.
 * Example:
 * var time = 14;
 * if (time < 12) {
 *   console.log('Good morning!');
 * } else if (time < 18) {
 *   console.log('Good afternoon!');
 * } else {
 *   console.log('Good evening!');
 * }
 * 
 * 3. Else Statement:
 * The else statement is used to specify a code block that will be executed if none of the preceding conditions are true.
 * Example:
 * var isRaining = false;
 * if (isRaining) {
 *   console.log('Bring an umbrella.');
 * } else {
 *   console.log('Enjoy the weather!');
 * }
 * 
 * 4. Switch Statement:
 * The switch statement is used to perform different actions based on different conditions. It is an alternative to a series
 * of else-if statements.
 * Example:
 * var day = 'Monday';
 * switch (day) {
 *   case 'Monday':
 *     console.log('Start of the week');
 *     break;
 *   case 'Friday':
 *     console.log('Weekend is near');
 *     break;
 *   default:
 *     console.log('Enjoy the day');
 * }
 * 
 * Control flow structures allow developers to create dynamic and flexible programs by controlling the execution order
 * based on different conditions and values.
 */