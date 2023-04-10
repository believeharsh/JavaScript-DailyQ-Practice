// Q. Write a JavaScript function to clone an array.
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// const Clone_Array = function(arr){
//   return arr.slice(0);
// }
//  console.log(Clone_Array([1, 2, 4, 0]));
//  console.log(Clone_Array([1, 2, [4, 0]]));

// Q. 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array

// const first_elem = function (arr , n ){
//    if(n<0){
//      console.log("invalid Number has been given ")
//    }
//   else{ 
//   return arr.slice(0 , n )
//   }
// }
// console.log(first_elem([1,2,3,4,5] , 1 ))
// console.log(first_elem([1,2,3,4,5] ,0  ))
// console.log(first_elem([1,2,3,4,5] , -1 ))
// console.log(first_elem([1,2,3,4,5] , 5 ))



// Q.4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array

const  last =  function(array, n) {
    if (array == null) 
      return void 0;
    if (n == null) 
       return array[array.length - 1];
    
    // here the position counting will start from end therefore this statement will retrun the elements from last. 
    
    return array.slice(Math.max(array.length - n, 0));  
    };
  
  console.log(last([7, 9, 0, 8] ,1));
  console.log(last([7, 9, 0, -2],2));
  console.log(last([7, 9, 0, 8,9,78 ],3));