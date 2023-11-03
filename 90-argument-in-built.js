
// 'argument object, which is a special object available inside a function that holds all the parameters passed to that funcion. The argument objects allows you to access the arguments dyanmically without explicitly naming them in the function's parameter FileList. It is an array-like object but not a ture JavaScript array.

function exampleFunction(a, b, c) {
    console.log(arguments[0]); // Accesses the first argument 'a'
    console.log(arguments[1]); // Accesses the second argument 'b'
    console.log(arguments[2]); // Accesses the third argument 'c'
    console.log(arguments.length); // Prints the number of arguments passed
  }
  
  exampleFunction(1, 2, 3);