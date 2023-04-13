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


// 10. Write a JavaScript program which prints the elements of the following array. Go to the editor
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (let i in a) 
{
   console.log("row " + i);
   for (let j in a[i]) 
     {
      console.log(" " + a[i][j]);
     }
}
