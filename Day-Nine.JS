// Question 
// . Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.


let str = 'Write a JavaScript program to find the most frequent item of an array.'
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result = [];
  
  for(let x=0; x<str.length; x++)
  {
    if(UPPER.includes(str[x]))
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.includes(str[x]))
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));


// const Swap_str_char = function (Str) {
//   for(let x=0; x<Str.length; x++)
//   {
//     if(Str.includes(Str[x]))
//     {
//       result.push(Str[x].toLowerCase());
//     }
//     else if(Str.includes(Str[x]))
//     {
//       result.push(Str[x].toUpperCase());
//     }
//     else 
//     {
//       result.push(Str[x]);
//     }
//   }
// }
// let final = Swap_str_char('The Quick Brown Fox');
// final()
