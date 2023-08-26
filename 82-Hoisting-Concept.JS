console.log(harsh)

great()
function great(){
  console.log("good morning")
}
var harsh = 20; //declaration is hoisted to the top but initilzation is not
const harsh2  = 20;
// declaration is hoisted to the top but initilzation is not
// hoisting don't work with let and const 
console.log(harsh)

// console.log(functionExpression)
//  var functinExpression = function(){
//    console.log("hii functionexpression")
//  }
// function expression and class expression are not follow the rule of the hoisting in JS


// Hoisting is (to many developers ) are unknown and overlooked behavior of javaScript . If a developet doesn't understand hoisting, program may contain bugs. to avoid bugs always declare varibales at the beginning of the scope Since this is how js interprets the code.
