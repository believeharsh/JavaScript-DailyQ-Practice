
// 19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. 
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

function Arrays_sum(array1, array2) 
{
  var result = [];
  var ctr = 0;
  var x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length) 
 {
    for (x = ctr; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));

