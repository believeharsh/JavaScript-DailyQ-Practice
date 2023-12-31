// 1. What is undefined in js ?

// undefined is a property of the global object. That is, it is a variable in global scope.

// A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.


// 2. What is the mean of term called Not defined ?

// The JavaScript exception "variable is not defined" occurs when there is a non-existent variable referenced somewhere


// ReferenceError: "x" is not defined (V8-based & Firefox)
// ReferenceError: Can't find variable: x (Safari)



// console.log(a)
var a;
console.log(a)
a = 10; 

if(a === undefined){
  console.log("a is undefined yet")
}
else{console.log("a is defined ")}


// JavaScript knows as a loosly types languages because it don't restrict to the user to store onle one type of data rather you have a liberty to hold and kind of data into it. 