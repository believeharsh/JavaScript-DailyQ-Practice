// he slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

const array_value = function (array , n){
    // if(array == 0)
    //   return void 0 ;
    // if(n == null)
    //   return array[0];
    // if(n < 0)
    //   return [];
    return array.slice(0,n)
  }
  console.log(array_value([1,2,3,4,5] , 2))
  console.log(array_value([7, 9, 0, -2],6));
  console.log(array_value([],3));
  console.log(array_value([7, 9, 0, -2],2));
  console.log(array_value([7, 9, 0, -2],4));
  
  
  // var first =  function(array, n) {
  //       if (array == null) 
  //       return void 0;
  //     if (n == null) 
  //       return array[0];
  //     if (n < 0)
  //       return [];
  //     return array.slice(0, n);
  //   };
  
  // console.log(first([7, 9, 0, -2]));
  // console.log(first([],3));
  // console.log(first([7, 9, 0, -2],3));
  // console.log(first([7, 9, 0, -2],6));
  // console.log(first([7, 9, 0, -2],-3));
  