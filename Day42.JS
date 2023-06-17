
const collect = require('collect.js'); 
     
let arr = [1, 2, 3]; 
     
// Convert array into collection 
const collection = collect(arr); 
 
// item to searched
let item = 3;
 
let newObject = collection.contains(item);
     
console.log("Result : ", newObject);