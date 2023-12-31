// What is callstack?

// A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.


// When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.

// Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.

// When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

// If the stack takes up more space than it was assigned, a "stack overflow" error is thrown.

// example for understanding the callstack 
function one(){
    console.log("first")
    two()
  }
  function two(){
    console.log("second")
    three()
  }
  function three(){
    console.log("third")
  }
  one()
  two()
  three()