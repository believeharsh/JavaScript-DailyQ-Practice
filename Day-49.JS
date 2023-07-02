const arr = [1,2,3,4,5,10,11,12,13,6,7,8,9,14,15];
const arr2 = [5,6,7,8,9,10];
const Name1 = ["Harsh"];
const Name2 = ["Dahiya"];

// ........................  Array 20 methods in JavaScript .............................
console.log(arr);

console.log(arr.splice(1,5));
console.log(arr.splice(0,8));
console.log(arr.splice(2,5));
console.log(arr2.slice(1,4));

console.log(arr.toString());
// convert an array to string

const mapped = arr.map(element => element + 1);
console.log(mapped);

const filtered = arr.filter(element => element > 5 && element < 11 );
console.log(filtered);

const ascending = arr.sort((a,b) => a > b ? 1 : -1);
const descending = arr.sort((a,b) => a < b ? -1 : 1);

console.log(ascending);
console.log(descending);


console.log(Name1.concat(Name2));

console.log(arr2.every(num => num > 4)); // true
console.log(arr2.every(num => num > 7)); // false

console.log(arr2.some(num => num === 5)); // true
console.log(arr2.some(num => num === 15)); // true


console.log(arr2.includes(2));
console.log(arr2.includes(7));


console.log(arr2.join("|"));

const reduces = arr2.reduce((a,b) => a + b);
console.log(reduces);
console.log(arr2.find(element => element > 6)); // 7


console.log(arr2.findIndex(element => element === 9));
console.log(arr2.indexOf(10)); // 5
console.log(arr2.indexOf(18)); // 5

let Arr1 =  new Array(3);
console.log(Arr1);
console.log(Arr1.fill(10));

console.log(arr.reverse())
console.log(arr.push("51"));
console.log(arr.valueOf());


arr.pop();
console.log(arr)


arr.shift();
console.log(arr);
console.log(arr.length)


arr.unshift("101");
console.log(arr);
console.log(arr.length)



  

