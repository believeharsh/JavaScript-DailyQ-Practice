




const CheckPromiseAll = function(name, delay){
    return new Promise((resolve, reject) => {
      {
        setTimeout(() => {
          resolve(`${name}`);
        }, delay)
      }
      
    });
  }
  
  const promise1 = CheckPromiseAll('Ayasha', 3000);
  const promise2  = CheckPromiseAll('Pari', 1000);
  const promise3 = CheckPromiseAll('Pakhi', 2000);
  const promise4 = CheckPromiseAll('Sai', 1500);
  
  
  
  
  const promiseone = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000 , 'onelineTimeout');
    // setTimeout(()=> {
    //   resolve('full');
    // },1000)
  });
  
  // console.log(promiseone)
  
  Promise.all([promise1, promise2, promise3, promise4, promiseone])
  .then((response) => {
    console.log(response)
  })