// Promsise.any() in the JavaScript
// promise.any() method is used to get the first resolved promise and it waits until it gets the resolved promise from iterables. if all of the promises will be failed then it will give Aggregate error. 
// [err1, err2, err3]


// Promise.any()


const p1 = new Promise((res,rej) => {
    // setTimeout(()=> res("P1 has been succussful"),100);
    setTimeout(()=> rej("P1 has been rejected Now "),1000);
  });
  const p2 = new Promise((res,rej) => {
    // setTimeout(()=> res("P2 has been succussful"),101);
    setTimeout(()=> rej("P2 has been rejected Now "),1010);
    
  });
  const p3 = new Promise((res, rej) => {
    setTimeout(()=> rej("P3 has been rejected Now "),1020);
    // setTimeout(()=> res("P3 has been succussful"),5000);
  });
  
  // if all the promise will be failed then it will give an aggregatorError;
  
  Promise.any([p1,p2,p3])
  .then((res) => console.log(res))
  // .catch((err) => console.error(err))
  .catch((err) => console.log(err.errors));