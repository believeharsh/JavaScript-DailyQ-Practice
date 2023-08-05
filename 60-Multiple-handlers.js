const p1 = new Promise((resolve, reject)=> {
    console.log("we found one promise P1")
    setTimeout(()=>{
      alert("Promise is being proceed")
       resolve(1)
    },2000)
  })
  p1.then(() => {
    console.log("first promise has been resolved")
    return new Promise((resolve, reject)=> {
      setTimeout(()=>{
        resolve(4) 
      },5000)
    })
    }).then((value)=>{console.log(value)})
   
  p1.then(() => {
    console.log("this is second handler")
  });
  p1.then(()=> {
    console.log("hurre this is the third time ")
  });