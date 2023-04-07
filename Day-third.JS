 // Write a JavaScript function to remove a specific element from an array.
// splice method in java script : It can be used to remove or add the array elements 
// : The splice() method is used to overwrite the array 

// 2, Definition and Usage
// The indexOf() method returns the position of the first occurrence of a value in a string.

// The indexOf() method returns -1 if the value is not found.

// The indexOf() method is case sensitive.

  // first approach : 
//   function remove_array_element(array, n)
  
//  {
//    let  index = array.indexOf(n);
//    if (index > -1) {
//     array.splice(index, 1);
// }
//    return array;
//  }

// console.log(remove_array_element([2,  8, 9, 7 ,  9, 6], 7 ));

// second approach : 
function remove_elem ( array , n ) {
    let index = array.indexOf(n)
    if (index > -1) {
      array.splice(index , 1)
    }
    return array ; 
  }
console.log(remove_elem([2,3, 4, 5,6,7,8] , 5));