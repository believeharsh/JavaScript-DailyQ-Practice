// Date 8th of April 2023 
// Array Question Practice

//  Q. : Write a JavaScript function to check whether an `input` is an array or not. 

// function Check_array (Arr) {
//   if(toString.call(Arr) === "[Object-Array]") {
//     return true;
//      return false;
//   }

// console.log(Check_array('Harsh Dahiya'));
// // console.log(Check_array([1,2,3,4,5]));

  
var is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));
  
  //Defination :
  // The toString() method returns a string as a string.
  
  // The toString() method does not change the original string.
  
  // The toString() method can be used to convert a string object into a string.
  