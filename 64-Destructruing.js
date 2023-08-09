// Date 9th Aug 2023
// usual way of declaring the variables in Js
// var names = ["alpha", "beta", "gamma", "delta"];
 
// var firstName = names[0];
// var secondName = names[1];
 
// console.log(firstName);//"alpha"
// console.log(secondName);//"beta"

// var x, y;
// [x, y] = [10, 20];
// console.log(x); // 10
// console.log(y); // 20

// or
// [x, y, ...restof] = [10, 20, 30, 40, 50];
// console.log(x); // 10
// console.log(y); // 20
// console.log(restof); // [30, 40, 50]


//............ Object destructuring:..............
// ({ x, y} = { x: 10, y: 20 });
// console.log(x); // 10
// console.log(y); // 20

// or
// ({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
// console.log(x); // 10
// console.log(y); // 20
// console.log(restof); // {m: 30, n: 40}


// // Example 1: When using destructuring assignment the same extraction can be done using below implementations.

// var names = ["alpha", "beta", "gamma", "delta"];
// var [firstName, secondName] = names;
     
// console.log(firstName);//"alpha"
// console.log(secondName);//"beta"
 
// Both of the procedure are same
// var [firstName, secondName,thirdName, fourthName] = ["alpha", "beta", "gamma", "delta"]; // array destructuring here 
         
// console.log(firstName);//"alpha"
// console.log(secondName);//"beta
// console.log(thirdName);//"gama
// console.log(fourthName);//"delta



// Example 2: The array elements can be skipped as well using a comma separator. A single comma can be used to skip a single array element. One key difference between the spread operator and array destructuring is that the spread operator unpacks all array elements into a comma-separated list which does not allow us to pick or choose which elements we want to assign to variables. To skip the whole array it can be done using the number of commas as there is a number of array elements. 

// var [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
         
// console.log(firstName);//"alpha"
// console.log(thirdName);//"gamma"


// Example 3: In order to assign some array elements to variable and rest of the array elements to only a single variable can be achieved by using rest operator (…) as in below implementation. But one limitation of rest operator is that it works correctly only with the last elements implying a subarray cannot be obtained leaving the last element in the array. 

// var [firstName,...lastName] = ["alpha", "beta", "gamma", "delta"];
         
// console.log(firstName);//"alpha"
// console.log(lastName);//" beta, gamma, delta"

//Example 4: Values can also be swapped using destructuring assignment as below: 

// var [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
 
// console.log(firstName);//"alpha"
// console.log(secondName);//"beta"
 
//After swapping
// [firstName, secondName] = [secondName, firstName]
     
// console.log(firstName);//"beta"
// console.log(secondName);//"alpha"

//Example 5: Data can also be extracted from an array returned from a function. One advantage of using a destructuring assignment is that there is no need to manipulate an entire object in a function but just the fields that are required can be copied inside the function. 


// function NamesList() {
//         return ["alpha", "beta", "gamma", "delta"]
//     }
// var[firstName, secondName] = NamesList();
 
// console.log(firstName);//"alpha"
// console.log(secondName);//"beta"

//Example 6: In ES5 to assign variables from objects its implementation is 

// var marks = {x: 21, y: -34, z: 47 };
 
// var x = marks.x; // x = 21
// var y = marks.y; // y = -34
// var z = marks.z; // z = 47
 
// console.log(x);
// console.log(y);
// console.log(z);

//Example 7: The above implementation in ES6 using destructuring assignment is. 
// var marks = {x: 21, y: 22, z: 23 };
 
// const { x, y, z } = marks; // x = 21, y = -34, z = 47 // destructruing
 
 
// console.log(x);
// console.log(y);
// console.log(z);

// Example1: The Nested objects can also be destructured using destructuring syntax. 

// const marks = {
// section1: { alpha: 15, beta: 16},
// section2: { alpha: -31, beta: 19 }
// };
// const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
// console.log(alpha1, beta1); // 15, 16
// const {section2 : {alpha: alphafirst, beta: betafirst}} = marks;
// console.log(alphafirst, betafirst

//Example2: Nested objects can also be destructuring

let obj = {
    name: "GFG",
    add : {
        country: "India",
        state : {
            code : "JS",
            pincode:"820800",
            article:{
              topic : "destructuring"
            }
        }
    }
}
 
let {name} = obj;
console.log(name)
 
let {add:{country:abcd}} = obj
console.log(abcd)
 
let {add:{state:{code:cd}}} = obj
console.log(cd)
 
let {add:{state:{article:{topic:ef}}}} = obj
console.log(ef);