// The finally method will always run whether try has an error or even catch has an error
const func = () => {
    try{
    let a = 0;
    console.log("a")
    // console.log(program)
    console.log("program ran successfully")
  }
  catch(err){
    console.log("this is an error")
    // console.log(p)
  }
  finally{
    console.log("this is the final step of last function")
  }
  }
  func()
  // if there is any error in  try , finally is executed just before the control returns to the outer code
  
  console.log("END")
  