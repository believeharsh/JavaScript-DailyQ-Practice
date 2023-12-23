// Promise.race()

// In javaScript Promise.race method is used to get the first settled promsie that either can be resolved and rejected, but it will provide the first settled Promise.   

const p1 = new Promise((res,rej) => {
  setTimeout(()=> res("P1 has been succussful"),3000);
});
const p2 = new Promise((res,rej) => {
  setTimeout(()=> res("P2 has been succussful"),2000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(()=> rej("P3 has been Rejected now :)"),1000);
//   setTimeout(()=> res("P3 has been succussful"),5000);
});

Promise.race([p1,p2,p3])
.then((res) => console.log(res))
.catch((err) => console.error(err))