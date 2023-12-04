// Sort Method In JavaScript : 


// The sort() method can be used to sort elements of an array in ascending order based on Unicode character code values by default.


// The sort() method can also be used to sort an array of strings, but the sorting order may not be accurate in all cases.


// Difference between Sort and toSorted Method in Js
// sort() method mutate the original array. No need to store the return value in variable. toSorted() method does not mutate the original array. Need to store the return value in variable.


// .toSorted() is a new method. As you can see in the MDN doc you linked, it's not supported in node.js yet.
const Arr = [1, 20, 30, 60, 14, 15];
const Res = Arr.sort();
console.log(Res);
// Output = [1,14,15 20, 30, 60 ];


const Arr1 = ['Harsh', 'Dahiya', 'Asyab ', 'Dahiya'];
const Res1 = Arr1.sort();
const CheckwithCallback = Arr.sort((a,b) => b-a);
const checkwithtoSort = Arr.toString();
console.log(checkwithtoSort)
console.log(CheckwithCallback);
console.log(Res1)


// JavaScript code to sort the strings
 
// Function to perform sort
function string_sort (str) {
    let i = 0;
    let j;
      
    while (i < str.length) {
      j = i + 1
      while (j < str.length) {
        if (str[j] < str[i]) {
          let temp = str[i]
          str[i] = str[j]
          str[j] = temp
        }
        j++
      }
      i++
    }
  }
   
  // Driver code
   
  // Original string
  let string = ['Suraj', 'Sanjeev', 'Rajnish', 'Yash', 'Ravi']
   
  // Print original string array
  console.log('Original String')
  console.log(string)
   
  // Call string_sort method
  string_sort(string)
   
  console.log('After sorting')
   
  // Print sorted string array
  console.log(string)

