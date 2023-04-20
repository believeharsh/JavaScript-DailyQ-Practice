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
  