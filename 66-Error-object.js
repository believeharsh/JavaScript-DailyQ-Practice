// try{
//   console.log(harsh)
//   throw new ReferenceError("harsh is great guy but sufering from procastination")
// }
// catch(err){
//   console.log(err.name)
//   console.log(err.message)
//   console.log(err.stack)
// }

// ....................... with user input .................................
try{
    let age = prompt("enter your age by this year")
    age = Number.parseInt(age)
    if(age>50){
        // console.log(harsh)
    throw new ReferenceError("This is probably not true entre valid age ")
    }
  
  }
  catch(err){
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
  }
  
  console.log("this script has been running yet")