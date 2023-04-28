// const age = 26;
// const beverage = age >= 21 ? "Beer" : "Juice";
// console.log(beverage); // "Beer"



// second : 
// const greeting = (person) => {
//   const name = person ? person.name : "stranger";
//   return `Howdy, ${name}`;
// };

// console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
// console.log(greeting(null)); // "Howdy, stranger"

// console.log(greeting({ name : "Bontinue"}))

// third : 
// function example(num) {
//   return condition1 ? value1
//         : condition2 ? value2
//         : condition3 ? value3
//         : value4;
// }
// example()


// 4.:
// ternary operator to check the eligibility to vote
// let Age = 15;
// let result =
//     (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
// console.log(result);

// five no question 
// program to check if number is positive, negative or zero
let a = -3;
let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);

// Note: You should try to avoid nested ternary operators whenever possible as they make your code hard to read.