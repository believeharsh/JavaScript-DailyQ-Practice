const p1 = new Promise((res, rej) => {
    setTimeout(()=> {
      // res("p1 has been successed")
      rej("p1 has been rejected")
    },2000)
    
    
  })
  const p2 = new Promise((res, rej) => {
    setTimeout(()=> {
      // res("p1 has been successed")
      rej("p2 has been rejected")
    },1000)
  
    
  })
  const p3 = new Promise((res, rej) => {
    setTimeout(() => {
      // res("p3 has been successed")
      rej("p3 has been rejected")
    },3000)
  
    
  })
  // 1. Promise.all() method 
  
  // Promise.all([p1, p2,p3]).then((res)=> console.log(res)).catch((err)=> console.error(err))
  
  // firstly It will get the all resultes from promises and then it will print the result but if any promise get rejected then it will error only. 
  


  // 2. Promise.allSettled() method

  // Promise.allSettled([p1, p2,p3]).then((res)=> console.log(res)).catch((err)=> console.error(err))

  // if any promise gets rejected then it still wait for another promise to be settled and finally it will return the result that either can be resolved or rejceted
  


  // 3. Promise.race() method

  // Promise.race([p1, p2,p3]).then((res)=> console.log(res)).catch((err)=> console.error("p2 has been rejcted now"))

  // this will return the first promise which will be settled firstly that is either can be resolved and rejcted
  
  
  // 4. Promise.any() method
  Promise.any([p1, p2,p3]).then((res)=> console.log(res)).catch((err)=> console.error(err.errors))
  // this method will return the first promise which will resolved first and if all the promise gets rejcted then it will give the aggregated errors. 
  
  
  