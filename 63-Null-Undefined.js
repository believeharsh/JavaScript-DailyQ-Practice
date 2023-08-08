// A very common test that can be done is to check if a variable is null or undefined, or even "empty", as the example below:
// let username = 10;
// let name = '';
// if(name!==null  || name !== undefined || name !==''){
//   username = name;
//   console.log(username)
// } else{
//   username = "";
//   console.log(username)
// }

// let userName = name || "";
// if(userName === undefined){
//   console.log("true")
// }
// else{
//   console.log("false")
// }
// console.log(userName)

// var temp;
// if(temp === undefined)
// console.log("true");
// else
// console.log("false");

// var temp=['a','b','c'];
// if(temp[1] === undefined)
// console.log("true");
// else
// console.log("false");


// ternary operator in js
// let big;
// const x = 10;
// if(x>10){
//   big = true;
//   console.log(big)
// }
// else{
//   big = false;
//   console.log(big)
// }


// one line ternary operator
// let big = x > 10 ? true : false;
// console.log(big) 



function x() {console.log('x')};
function y() {console.log('y')};
let z = 4;
// if(z==3){
//   x();
//  console.log(x)
  
// }
// else{
//   y()
//   console.log(y)
// }
 // with ternary operator
(z==3 ? x : y)() //shortcut
