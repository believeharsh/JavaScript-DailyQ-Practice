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


const arrt = [1,2,3,5,6,7]
console.log(arrt.copyWithin(2, 1, 5))


// 3. every() : The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const isBelowThreshold = (currentValue) => {

    currentValue < 40;
}

const array3 = [1, 30, 39, 29,41,  10, 13];

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
