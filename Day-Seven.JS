// Question .
//   5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White", "Black"];

// const Convert_array = function(arr) {
//  let b =  arr.toString() // it will change array to string 
//   let c = arr.join("+")  // .. this statement will separate array 
//                          //     elements with + sign . 
//   console.log(b)
//   console.log(c)
// }

// console.log(Convert_array(["Red","Green ","Black", "White"]))

// Q. 6: 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

//

const num = [246824682468246813579];
const str = num.toString();
const result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if ((str[x-1]%2 === 0) && (str[x]%2 === 0) )
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));