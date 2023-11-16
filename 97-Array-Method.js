let str = Array.of("Be", "a", "Coding", "Ninja");

// Logging str
console.log(str);

const arr = ["Be", "a", "Coding", "Ninja"];

// Writing the answer function.
const answer = arr.indexOf("Ninja");
console.log(answer);

// Creating array along with elements.
const arr1 = ["Be", "a", "Coding", "Ninja"];

// Logging the length
console.log("The length of the array is " + arr1.length);

// Creating array along with elements.
const arr2 = ["1800", "123", "3598"];

// Writing the answer function
const answer1 = arr2.find((x) => x < 200);

// Logging the answer
console.log("ans = " + answer1);

//findIndex() method
const answer2 = arr2.findIndex((x) => x < 200);
console.log("ans = " + answer2);

//reverse() method
// Creating array along with elements.
const arr3 = ["Be", "a", "Coding", "Ninja"];

// Writing the answer function
const answer3 = arr.reverse();

// Logging the answer
console.log("Reversed array : ");
console.log(answer3);

// forEach() method
/* 
    Creating array along with elements.
    Assuming the initial sum = 0.
*/
const arr4 = [1800, 123, 3598];
let sum = 0;

// Using the forEach() method
arr4.forEach(function sumUntilNow(element) {
  sum = sum + element;
});

// Logging the answer
console.log("Sum of the elements of the arr = " + sum);

// concat() method
// Creating arrays along with elements.
const arr5 = ["Be", "a"];
const arr6 = ["Coding", "Ninja"];

// Writing the answer function
const answer4 = arr5.concat(arr6);

// Logging the Original and the new array
console.log("Original Arrays :");
console.log(arr5, arr6);
console.log("New Array : ");
console.log(answer4);

// join() method
// Creating array along with elements.
const arr7 = ["Be", "a", "Coding", "Ninja"];

// Writing the answer function
const answer5 = arr7.join(" ");

// Logging the answer
console.log("Array without Join Method : " + arr7);
console.log(answer5);

//map() method
// The map() method takes the functions as parameters and creates a new array with the results of applying them to each element.

// Creating array along with elements.
const arr8 = [1800, 123, 3598];

// Writing the answer function
const ans8 = arr8.map((x) => x - 100);

// Logging the answer
console.log(ans8);

// flat() method

// Creating 3-D array along with elements.
const arr9 = [[1800], [123], [3598]];
const arr10 = [
  [1800, 200],
  [123, 200],
  [3598, 200],
];

// Writing the answer function
const ans9 = arr9.flat();
const ans10 = arr10.flat();

// Logging the answer and the original array
console.log("Original Array :");
console.log(arr9);
console.log("New Array : ");
console.log(ans9);
console.log(ans10);

//pop() method
//We use this method to remove the last element of the array. This method returns the last element too.

// Creating array along with elements.
const arr11 = [1800, 123, 3598];

// Writing the answer function
const ans11 = arr11.pop();

// Logging the answer and the array
console.log("Array after popping :");
console.log(arr11);
console.log("Popped Element : ");
console.log(ans11);

//push() method
// We saw how we could remove an element from the end of the array. But how can we add an element there? We can achieve this using the push method. It adds elements at the end of the array.

// Creating array along with elements.
const arr12 = [100, 200, 300];

// Writing the answer function
const ans12 = arr12.push(400);

// Logging the array
console.log("Array after pushing :");
console.log(arr12);

//filter() method
// We use this method to extract only the elements which satisfy the required conditions. We are not changing the original array; it returns a new one.

// Creating array along with elements.
const arr13 = ["Be", "a", "Coding", "Ninja"];

// Writing the answer function
const answer13 = arr.filter((arr13) => arr13.length > 4);

// Logging the Original and the new array
console.log("Original Array :");
console.log(arr13);
console.log("New Array : ");
console.log(answer13);

//sort() method
// We use this method to arrange the elements of an array in ascending (default) order. It returns the sorted array. We also can give a compare function as the parameter to this method for customizing the type of sorting. This method does sorting on the original array.

// Creating array along with elements.
const arr14 = ["Be", "a", "Coding", "Ninja"];

// Apply the sort function
arr14.sort();

// Logging the sorted array
console.log(arr14);

//shift() method
// We use this method if we want to remove the first element of the array. We update the array by using this method. The shift() method returns the element removed from the array.

// Creating array along with elements.
const arr15 = ["Be", "a", "Coding", "Ninja"];

// Writing the answer function
const answer15 = arr15.shift();

// Logging the answer and the updated array
console.log("The shifted element = " + answer15);
console.log(arr15);

//unshift() method
// We saw how we could remove the first element of the array. But now, if we want to add new elements to the array in the beginning, we will use the unshift() method. This method returns the length of the updated array.
// Creating array along with elements.
const arr16 = ["Be", "a", "Coding", "Ninja"];

// Writing the answer function
const answer16 = arr16.unshift("Join", "Now");

// Logging the answer and the updated array
console.log("New length of the array = " + answer16);
console.log(arr16);

// slice() method
// We use this method to create a new subarray from the array. We give the starting and ending positions from where we want to slice. The starting position is included, and the ending position is excluded. This method does not change the original array in any way.

// Creating array along with elements.
const arr17 = ["Be", "a", "Coding", "Ninja"];

// Writing the slice function
const newArray = arr17.slice(1, 3);

// Logging the Original and the new array
console.log("Original Array :");
console.log(arr17);
console.log("New Array : ");
console.log(newArray);

// toString() method
// We use this method to convert the array into a string.

// Creating array along with elements.
const arr18 = [1800, 123, 3598];

// Writing the answer function
const ans18 = arr18.toString();

/* 
    Logging the type of answer
    Logging the answer
*/
console.log(typeof ans18);
console.log(ans18);
