/**
 * OPERATORS
 * 
 * 0. Operators in JavaScript are symbols or keywords that perform operations on one or more operands. 
 * Operands can be values, variables, or expressions. Operators are fundamental for performing various
 * actions in programming, such as arithmetic calculations, comparisons, logical evaluations, and more.
 * 
 * 1. Assignment Operators:
 * Assignment operators are used to assign values to variables.
 * = (assign): assigns the value on the right side to the variable on the left side. // var apple = 'Red'
 * += (Add and assign) // 1 += 2 // 3
 * -= (Subtract and assign) 4 -= 2 // 2
 * *= (Multiply and assign) 5 *= 5 // 25
 * /= (Divide and assign) 144 /= 12 // 12
 * %= (Modulus and assign) 12 %= 5 // 2 (12 can only be evenly divided by 5 twice, which makes the value 2)
 * 
 * 2. Arithmetic Operators:
 * Arithmetic operators perform mathematical operations on numeric values.
 * Examples:
 * var addition = 5 + 3; // adds 5 and 3
 * var subtraction = 10 - 4; // subtracts 4 from 10
 * var multiplication = 2 * 6; // multiplies 2 by 6
 * var division = 8 / 2; // divides 8 by 2
 * var modulus = 10 % 3; // calculates the remainder of 10 divided by 3
 * var increment = 5; 
 * increment++; // increment is now 6
 * var decrement = 8;
 * decrement--; // decrement is now 7
 * 
 * 3. Comparison Operators:
 * Comparison operators compare two values and return a boolean result.
 * == (Equal to) 10 == "10" // checks if 10 is equal to "10" (true)
 * === (Strict equal to) 10 === "10"; // strictly checks if 10 is equal to 10 (false, because 10 is a number and "10" is a string)
 * != (Not equal to) var notEqual = "2005" != 3005 //Checks if the values are equal and returns true if they aren't (true)
 * !== (Strict not equal to) 'hello' !== 'world'; // checks if 'hello' is not equal to 'world' (true)
 * > (Greater than) 100 > 10 // checks if a (100) is greater than b (10) (true)
 * < (Less than) 30 < 60 // checks if a (30) is less than b (60) (true)
 * >= (Greater than or equal to) 70 >= 69 //Checks if a (70) is greather than or equal to b (69) (true)
 * <= (Less than or equal to) 85 <= 50 // Checks if a (85) is less than or equal to b (50) (false)
 * 
 * 4. Logical Operators:
 * Logical operators are used to combine or modify boolean values.
 * var andOperator = (true && false); // logical AND, returns false
 * var orOperator = (true || false); // logical OR, returns true
 * var notOperator = !true; // logical NOT, returns false
 * 
 * 5. Unary Operators:
 * Unary operators operate on a single operand.
 * Example:
 * var increment = 5; // increment by 1
 * increment++; // increment is now 6
 * 
 * 6. Ternary Operator:
 * The ternary operator is a shorthand way of writing an 'if-else' statement in a single line.
 * Syntax: condition ? expression_if_true : expression_if_false
 * Example:
 * var age = 20;
 * var canVote = (age >= 18) ? 'Yes' : 'No'; // checks if age is 18 or older
 * 
 * These operators play a crucial role in performing actions, making decisions, and manipulating data in your code.
 */
