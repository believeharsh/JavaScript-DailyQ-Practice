// Date 24th of april 2023 
// Arryas methods : 

// 1. concat() : The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// let Array = [1,2,3,4,5,6,7,8]
// let Array_second = [12,13,14, 15, 16]

// let New_array = Array.concat(Array_second);
// console.log(Array)
// console.log(Array_second)
// console.log(New_array)

// 2. copyWithin() : The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
// copyWithin(target)
// copyWithin(target, start)
// copyWithin(target, start, end)

const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]


const arrt = [1, 2, 3, 5, 6, 7]
console.log(arrt.copyWithin(2, 1, 5))


// 3. every() : The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const isBelowThreshold = (currentValue) => {

  currentValue < 40;
}

const array3 = [1, 30, 39, 29, 41, 10, 13];

console.log(array3.every(isBelowThreshold));
// Expected output: true

const isSubset = (array1, array2) => {
  array2.every((element) => array1.includes(element));
}

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false


// 4. filter() : The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(words => words.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


// 5. flat() : The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr12 = [0, 1, 2, [3, 4]];


console.log(arr12.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr21 = [0, 1, 2, [[[3, 4]]]];

console.log(arr21.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]

// Flattening nested arrays
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



// 6. foreach() : The forEach() method executes a provided function once for each array element.
const check_foreach_method = ['a', 'b', 'c'];

check_foreach_method.forEach(element => console.log(`your element is ${element}`));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


// 7. indesof() : The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 3));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1


const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.indexOf.call(arrayLike, 2));
// 0
console.log(Array.prototype.indexOf.call(arrayLike, 5));
// 


// 8. lastIndexOf() : The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// const animals = ['Dodo','monkey','Tiger' , 'donkey',  'Penguin' , 'Tiger' , 'Harsh' , 'dahiya' , 'Tiger'];

// console.log(animals.lastIndexOf('Dodo'));
// // Expected output: 3

// console.log(animals.lastIndexOf('Tiger'));
// // Expected output: 1


//  let x = function Reduce_method (accumulator , currentValue) {

//    let Reducedable_arr = [15 , 16, 17, 18, 19 ]
//    console.log(Reducedable_arr.reduce((accumulator, currentValue) => accumulator + currentValue, 10))
//  }

// x()


// 8.slice() : The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// syntax: 
// slice()
// slice(start)
// slice(start, end)

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


// 9. splice() "The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place."
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]






