// 15. We have the following arrays : Go to the editor
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red.

// let arr1 = ["Blue", "Green", "Red ", "Orange" , "Violet" , "Indigo" , "Yellow"];
// let arr2 = ["th" , "st" , "nd", "rd"]

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Ordinal(n)
 {
 var o = ["th","st","nd","rd"],
 x = n%100;
 return x+(o[(x-20)%10]||o[x]||o[0]);
 }

for(n = 0; n < color.length; n++){
 var ordinal = n + 1;

 var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

console.log(output);
}

// Ordinal Number :  Ordinal numbers are the numbers that indicate the exact position of something or someone at a place.
//                      If the number of objects/persons are specified in a list: the position of the objects/persons is
//                      defined by ordinal numbers.


// 16. Write a JavaScript program to find the leap years in a given range of years.
function leap_year_range(st_year, end_year) {
    var year_range = [];
    for (var i = st_year; i <= end_year; i++)
    {
         year_range.push(i);
    }
    var new_array = [];

year_range.forEach(
function(year)
{ 
   if (test_LeapYear(year)) 
   new_array.push(year);
});

return new_array;
 }

function test_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
    } else {
            return false;
    }
}

console.log(leap_year_range(2000,2012));
