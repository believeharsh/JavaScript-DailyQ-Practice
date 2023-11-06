// Spread-Syntax(...)
// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

// const sum = (x,y,z) => {
//     return x + y + z ;

// }
// const numbers = [1,2,3];
// console.log(sum(...numbers))
// console.log(sum.apply(null, numbers))


// const array = [1, 2, 3];
// const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
// console.log(obj)


const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
console.log(obj)