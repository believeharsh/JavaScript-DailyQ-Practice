// Date 6th of may 2023 
/// question : If one house require 6 match stick for the build up but apart form first house, rest of the houses will be required 5 match sticks because one match stick will be common . so calculate the number of match stick for the random number of the houses . 

// main function 
// let Createhouse = function (house) {
//   return ( house * 6 ) - ( house + 1) ;
// }
// console.log(Createhouse(5));
// console.log(Createhouse(63));
// console.log(Createhouse(10));

// *************************************************************************

// Aera of square 
let side_of = {
    side : 5,
    get aera () {
      // return this.side * this.side
      return this.side ** 2  // exponentiation operator 
    
    }
  }
  
  side_of.side = 100;
  console.log(side_of.aera)
  // const dimension = function(side) {
  //   return side * side
  // }
  // console.log(dimension(5));
  // }

//   ******************************************************************************************
  
  function stringconcat(seperator , ... strings) {
    let returnval = '';
    strings.forEach((string , i ) => {
      if(i == strings.length-1) {
      returnval += string;
        }
        else{
        returnval += string + seperator
        
        }
        
      
    })
    return returnval;
  }
  
  
  console.log(stringconcat('+', "My" , "Name" , "is ","harsh"))