// 22. Write a JavaScript program to compute the union of two arrays. Go to the editor
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

function union(arra1, arra2) {
  
    if ((arra1 == null) || (arra2==null)) 
      return void 0;
    
    const obj = {};
   
    for (var i = arra1.length-1; i >= 0; -- i)
       obj[arra1[i]] = arra1[i];
   
    for (var i = arra2.length-1; i >= 0; -- i)
       obj[arra2[i]] = arra2[i];
   
    const res = [];
   
    for (const n in obj)
    {
    
      if (obj.hasOwnProperty(n)) 
        res.push(obj[n]);
    }
   
    return res;
  }
  console.log(union([1, 2, 3], [100, 2, 1, 10]));


//   23. Write a JavaScript function to find the difference of two arrays. Go to the editor
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
function differenceOf2Arrays (array1, array2) {
    var temp = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);
    
    for (var i in array1) {
    if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
    }
    for(i in array2) {
    if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
    }
    return temp.sort((a,b) => a-b);
    }
    
    console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
    console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
    
  