// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 
// It allows us to call functions before even writing them in our code.

// Note: JavaScript only hoists declarations, not initializations.

// console.log(foo()); // It will print bar in the console beacuse of js feature Hoisted 

// function foo () { // This is the function Declaration 
//   return 'bar'
// }

// but Now 

// console.log(foo1());
// var foo1 = () => {  // This is called function expression 
//   return 'foo1'
// }

// console.log(BelieveHarsh)
// let BelieveHarsh = "BelieveHarsh";

console.log(Harsh);
var Harsh = "Harsh";



fun() // Calling the expression

// let fun = () => { // Declaring
//   var name = 'Mukul Latiyan';
//   console.log(name);
// }
function fun() {
  var name = 'Mukul latiyan'
  console.log(name)
}