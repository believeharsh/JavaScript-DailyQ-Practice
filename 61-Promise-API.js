
const p1 = new Promise((resolve, reject)=> {
    console.log("we found one promise P1")
    setTimeout(()=>{
      // console.log("Promise p1 is being proceed")
       // resolve("first")
      reject("first")
    },1000)
  
  })
  const p2 = new Promise((resolve, reject)=> {
    console.log("we found one promise P2")
    setTimeout(()=>{
      // console.log("Promise p2 is being proceed")
       resolve("second")
    },2000)
    
  })
  const p3 = new Promise((resolve, reject)=> {
    console.log("we found one promise P3")
    setTimeout(()=>{
      // console.log("Promise p3 is being proceed")
       // resolve("third")
      reject("third")
    },3000)
     
  })
    
  // const promise_all = Promise.all([p1,p2,p3])
  // promise_all.then((value)=>{
  //   console.log(value)
  // }) 
  // If any value will of promises will be  rejected then promise.all will give the error
  
  
  
  // const promise_allSettled = Promise.allSettled([p1, p2, p3])
  // promise_allSettled.then((value)=>{
  //   console.log(value)
  // })
  // If any value will of promises will be rejected then promise.allSettled will give the status of all promise in array like fullfilled , rejected , pending
  
  
  // const promise_Race = Promise.race([p1, p2, p3])
  // promise_Race.then((value)=>{
  //   console.log(value)
  // })
  // whatever the promise will resolved firstly, promise.Race will give the result of that promise
  
  
  // const promise_any = Promise.any([p1, p2, p3])
  // promise_any.then((value)=>{
  //   console.log(value)
  // })
  // Promise.any will give the first promise which is firstly resolved .
  
  
  // const promise_resolve = Promise.resolve(6)
  // promise_resolve.then((value)=>{
  //   console.log(value)
  // })
  
  
  const promise_reject = Promise.reject(new Error("hey new error"))
  promise_reject.then((value)=>{
    console.log(value)
  })