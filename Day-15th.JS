// Date 19th april 2023 
// Array :> Array
// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// Description
// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// Array indices
// Array objects cannot use arbitrary strings as element indexes (as in an associative array) but must use nonnegative integers (or their respective string form). Setting or accessing via non-integers will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection. The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.

// Array elements are object properties in the same way that toString is a property (to be specific, however, toString() is a method). Nevertheless, trying to access an element of an array as follows throws a syntax error because the property name is not valid:

// console.log(arr.0); // a syntax error
// JavaScript syntax requires properties beginning with a digit to be accessed using bracket notation instead of dot notation. It's also possible to quote the array indices (e.g., years['2'] instead of years[2]), although usually not necessary.

// The 2 in years[2] is coerced into a string by the JavaScript engine through an implicit toString conversion. As a result, '2' and '02' would refer to two different slots on the years object, and the following example could be true:

// console.log(years["2"] !== years["02"]);
// Copy to Clipboard
// Only years['2'] is an actual array index. years['02'] is an arbitrary string property that will not be visited in array iteration.

// Relationship between length and numerical properties
// A JavaScript array's length property and numerical properties are connected.

// Several of the built-in array methods (e.g., join(), slice(), indexOf(), etc.) take into account the value of an array's length property when they're called.

// Other methods (e.g., push(), splice(), etc.) also result in updates to an array's length property.

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6 

fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2