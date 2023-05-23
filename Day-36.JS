// Date 23rd of May 2023 ( Harsh Dahiya  )
// Hoisting : 
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code

// Hoisting is not a term normatively defined in the ECMAScript specification. The spec does define a group of declarations as HoistableDeclaration, but this only includes function, function*, async function, and async function* declarations. Hoisting is often considered a feature of var declarations as well, although in a different way. In colloquial terms, any of the following behaviors may be regarded as hoisting:

// Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
// Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
// The declaration of the variable causes behavior changes in its scope before the line in which it is declared.

const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}

// // console.log(a)
// // getName()
// greet()
// var greet = function getName() {
//   console.log("Harsh Dahiya ")
// }
// let a;
