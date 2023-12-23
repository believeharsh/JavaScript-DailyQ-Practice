// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason. 
// the promise.all() method always return an Array which contain all the value of resolved promises. 




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