let p1 = new Promise((resolve, reject) => {
    console.log("promise is pending ")
   setTimeout(()=>{
    
     // console.log("I am a promise and I am fullfiled")
     resolve(true)
  
   },5000)
 
   
 })
 let p2 = new Promise((resolve, reject) => {
    console.log("promise is pending ")
   setTimeout(()=>{
    
     // console.log("I am a promise and I am fullfiled")
    
     reject(new Error("I am an error"))
   },5000)
 })
 
 p1.then((value)=>{
 console.log(value)
 })
 p2.catch((error)=>{
   console.log("served error in p2")
 })
 p1.finally(()=>{
   console.log("tumhara bhi katega ")
 })
 
 
 
 