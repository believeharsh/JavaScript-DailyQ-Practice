// When executing JavaScript code, errors will most definitely occur. These errors can occur due to a fault from the programmer’s side or the input is wrong or even if there is a problem with the logic of the program. But all errors can be solved and to do so we use five statements that will now be explained.

// The try statement lets you test a block of code to check for errors.
// The catch statement lets you handle the error if any are present.
// The throw statement lets you make your own errors.
// The finally statement lets you execute code after try and catch.  
// The finally block runs regardless of the result of the try-catch block.

// ................................ CODE ..............................

setTimeout(()=>{
    console.log("we are trying to hack asyab's phone privacy")
  })
  
  setTimeout(()=>{
    console.log("Asyab's Phone has been fetched now ....... ")
  },1000)
  
  // try{
  //   console.log(Asyab)
  // }
  // catch(error){
  //   // console.log("asyab's password is too dificult to hacked")
  //   console.log(error)
  // }
  try{
    setTimeout(()=> {
      try{
         console.log(asyab)
      }
      catch(err){
        console.log("asyab isn't define mere bhai kitne baar batau")
      }
    },1000)
  }
  catch(err){
          console.log(Asyab)
      }
  
  setTimeout(()=>{
    console.log("Phones call history has been fetched........")
  },2000)
  setTimeout(()=>{
    console.log("chrome personal history is hacked now in our system")
  },3000)
  setTimeout(()=>{
    console.log("Asyab be like now : abe mera hi kiu kaat rahe ho bhai chhod do mujhe!")
  },4000)
  
  // try {
  //     throw new Error('Yeah... Sorry');
  //  console.log(Error)
  // }
  // catch (e) {
  //     console.log(e);
  // }
  
  setTimeout(()=>{
    try {
      console.log(asyab);
  } catch (e) {
      console.log('catch');
  } finally {
      console.log('finally');
  }
  },7000)
  
  