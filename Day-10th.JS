// date 14th april 2023 
// 11. Write a JavaScript program to find the sum of squares of a numeric vector.
// this solution is from google 

function sum_sq(array) {
    var sum = 0, 
        i = array.length;
    while (i--) 
     sum += Math.pow(array[i], 2);
    return sum;
  }
  
  console.log(sum_sq([0,1,2,3,4])); 

  // my solution is here 
  function squaresum(n)
  {
      // Iterate i from 1 and n
      // finding square of i and add to sum.
      let sum = 0;
      for (let i = 1; i <= n; i++)
          sum += (i * i);
      return sum;
  }
  console.log(squaresum(10));  

  // 12. Write a JavaScript program to compute the sum and product of an array of integers.

const Array = [1, 2, 3, 4, 5, 6]
let sum = 0; 
let prod = 1; 
for(let i = 0; i<Array.length ; i++) { 
  sum += Array[i]
  prod *= Array[i]
}
console.log(`sum of array = ${sum}`)
console.log(`prod of array = ${prod}`)