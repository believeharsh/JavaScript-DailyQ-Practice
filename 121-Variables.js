// All three keywords do the basic task of declaring a variable but with some differences Initially, all the variables in JavaScript were written using the var keyword but in ES6 the keywords let and const were introduced.

// Why we dont use var anymore in js code? 

// The drawback of using var in react is that it has function scope and it is not block scoped, meaning that it can be accessed anywhere within the function it was declared in. This can lead to unexpected behavior and potential bugs.

// For example, if you declare a variable using var inside a loop, it will be accessible outside the loop as well. This can lead to unexpected behavior if you are not aware of this.


// Another drawback of using var is that it can be hoisted to the top of the function, which can lead to unexpected behavior if you are not aware of this.

// For example, if you declare a variable using var inside a conditional statement, it will be hoisted to the top of the function, even if it is not used before the conditional statement. This can lead to unexpected behavior if you are not aware of this.

// Overall, it is generally recommended to use the let and const keywords instead of var when declaring variables in react. This will help to avoid unexpected behavior and potential bugs.