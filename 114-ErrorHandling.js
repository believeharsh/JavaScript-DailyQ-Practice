// Error handling in javaScirpt
// JavaScript provides some features for handling errors in javaScript. 
// which are : try, Catch, finally, throw



// :::::::: Simple definition

// The try...catch statement is comprised of a try block and either a catch block, a finally block, or both. The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed. The code in the finally block will always be executed before control flow exits the entire construct.


// try {
//     nonExistentFunction();
//   } catch (error) {
//     console.error(error);
//     // Expected output: ReferenceError: nonExistentFunction is not defined
//     // (Note: the exact output may be browser-dependent)
//   }


// try {
//   MyFunc()
//   console.log("try has been successful") // it will not execute 
// } catch (exceptionVar) {
//   console.log("catch has been successful") // Catch has been successful 
// } finally {
//   console.log("finally block has been done yet ") /// fianally block has been done yet 
// }



// try {
//   throw new TypeError("oops");
// } catch ({ name, message }) {
//   console.log(name); // "TypeError"
//   console.log(message); // "oops"
// }

try {
    throw new TypeError("oops");
  } catch ({ name, message }) {
    // var name; // SyntaxError: Identifier 'name' has already been declared
    // let message; // SyntaxError: Identifier 'message' has already been declared
  
    let res1 = name;
    let res2 = name;
    console.log(typeof(res1)) + "<br>";
    console.log(res1)
    console.log(typeof(res2))
    console.log(res2)
  
  }
  
  
  function getRectArea(width, height) {
    if (width == 0 && height == 1) {
      console.log("true");
    }
    else console.log('false')
  }
  getRectArea(0 , 2) ;
  
  
  
  let Harsh = 1;
  let Asyab = 2
  console.log(Harsh == 1 && Asyab == 2); // true 
  console.log(Harsh == 1 && Asyab == 3); // false 
  console.log(Harsh == 2 && Asyab == 2);  // false
  console.log(Harsh == 3 && Asyab == 3); // false
  
  
  console.log(Harsh == 1 || Asyab == 2); // true 
  console.log(Harsh == 1 || Asyab == 3); // ture 
  console.log(Harsh == 2 || Asyab == 2);  // true
  console.log(Harsh == 3 || Asyab == 3); // false
  
  
  