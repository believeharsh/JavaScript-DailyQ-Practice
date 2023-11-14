//The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator. 

var employees = [
  {
    id: 111,
    name: "Chelsea Foster",
    years: 7,
  },

  {
    id: 102,
    name: "Aggie Sparling",
    years: 13,
  },

  {
    id: 123,
    name: "Timmy Matthews",
    years: 23,
  },

  {
    id: 119,
    name: "Emmet Foster",
    years: 22,
  },
];

let totalYears = employees.reduce(function (accumulator, employee) {
  return accumulator + employee.years;
}, 0);
console.log(totalYears);

// Input array
let arr = [175, 50, 25];

// Callback function for reduce method
function subofArray(total, num) {
  return total - num;
}

//Fucntion to execute reduce method
function myGeeks(item) {
  // Display output
  console.log(arr.reduce(subofArray));
}
myGeeks();




// Input array
let arr1 = [10, 20, 30, 40, 50, 60];
// Callback function for reduce method
function sumofArray(sum, num) {
    return sum + num;
}
//Fucntion to execute reduce method 
function myGeeks(item) {
    // Display output
    console.log(arr1.reduce(sumofArray));
}
myGeeks();


// Input array
let MyCheck = [10.2, 20.8 , 30.9 , 40.2 , 50.8, 60.7];

let StoreResult = MyCheck.reduce(function(sum, num)
{
    return sum + Math.round(num)
},0)
 
console.log(StoreResult)

