// All three keywords do the basic task of declaring a variable but with some differences Initially, all the variables in JavaScript were written using the var keyword but in ES6 the keywords let and const were introduced.

// Why we dont use var anymore in js code?

// The drawback of using var in react is that it has function scope and it is not block scoped, meaning that it can be accessed anywhere within the function it was declared in. This can lead to unexpected behavior and potential bugs.

// For example, if you declare a variable using var inside a loop, it will be accessible outside the loop as well. This can lead to unexpected behavior if you are not aware of this.

// Another drawback of using var is that it can be hoisted to the top of the function, which can lead to unexpected behavior if you are not aware of this.

// For example, if you declare a variable using var inside a conditional statement, it will be hoisted to the top of the function, even if it is not used before the conditional statement. This can lead to unexpected behavior if you are not aware of this.

// Overall, it is generally recommended to use the let and const keywords instead of var when declaring variables in react. This will help to avoid unexpected behavior and potential bugs.

// Why we should use let and const instead of var?
// In JavaScript, the let and const keywords were introduced in ES6 to provide more control over variable scoping and mutability. Here are some reasons why you should use let and const instead of the older var keyword:

// 1. Block Scope:

// let and const variables are declared with block scope, which means they are only accessible within the block of code in which they are declared. This makes your code more predictable and prevents variables from being accessed from unintended areas of your program.

// 2. Redeclaration:

// let variables can be redeclared within the same scope, but const variables cannot. This helps to prevent errors caused by accidentally redeclaring a variable.

// 3. Reassignment:

// let variables can be reassigned, but const variables cannot. This allows you to change the value of let variables as needed, while ensuring that const variables remain constant throughout your program.

// 4. Readability:

// Using let and const makes your code more readable and easier to understand, as it is clear which variables can be reassigned and which cannot.
// Overall, using let and const instead of var is a good practice that can help to improve the quality and readability of your JavaScript code.
