// What is the difference between rest and spread operator in Js
// In modern JavaScript, two handy operators play a crucial role in handling arrays and objects more effectively: the Spread Operator and the Rest Operator. Despite sharing the same syntax (three dots ...), their purposes and usage are different. 


// Spread Operator

// The Spread Operator allows an iterable (array, object, or string) to be expanded in places where zero or more arguments or elements are expected.

// Use the Spread Operator to combine two arrays:
const Arr1 = [12,13, 12];
const Arr2 = [...Arr1, 14, 15] // [12, 13, 12, 14, 15]


const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3}; // {a: 1, b: 2, c: 3}

const numbers = [10, 20, 30];
const maxNumber = Math.max(...numbers); // 30
console.log(maxNumber)


//Rest Operator

// The Rest Operator is used to collect the remaining elements into an array. This is particularly handy in function arguments.
function sum(...numbers) {
    return numbers.reduce((acc, number) => acc + number, 0);}
  
  console.log(sum(1, 2, 3, 4, 5)); // 15

//   Differences between Spread and Rest Operator
// Though they look the same, the context defines their behavior:
 

// Spread Operator expands an iterable into its individual elements.
 
// Rest Operator collects multiple elements and condenses them into a single array.


//  ***************************************************************************************


// Practical Use Cases
// Spread Operator in React

// In React, the Spread Operator is commonly used to pass properties to a component:

 const props = {firstName: 'John', lastName: 'Doe'};
const component = <UserComponent {...props} />;

// Rest Operator in Destructuring
// The Rest Operator is handy in destructuring to extract the remaining properties:

const {a, ...rest} = {a: 1, b: 2, c: 3};
console.log(rest); // {b: 2, c: 3}

//  ***************************************************************************************

// Q: Can I use Spread and Rest Operators in any JavaScript version?
// No, these are features of ECMAScript 6 (ES6) and later, so they won't work in older versions of JavaScript.


// Q: Can the Spread Operator be used with any data type?
// It can be used with any iterable, including arrays, objects, and strings.

// Q: Is it possible to use both Spread and Rest Operators in one function?
// Yes, you can use both in the same function. Use the Spread Operator to expand an iterable and the Rest Operator to collect arguments into an array.

// Conclusion
// The Spread and Rest Operators are powerful additions to modern JavaScript, providing concise ways to handle arrays and objects. While they share the same syntax, their context and functionality are distinct. The Spread Operator is used to 'spread' an iterable into its elements, while the Rest Operator 'collects' multiple elements into an array. Understanding these operators can greatly enhance code readability and efficiency, making them essential tools for contemporary JavaScript development.