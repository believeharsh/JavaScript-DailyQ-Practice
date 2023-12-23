/// Promise.AllSettled()



const p1 = new Promise((res,rej) => {
  setTimeout(()=> res("P1 has been succussful"),1000);
});
const p2 = new Promise((res,rej) => {
  setTimeout(()=> res("P2 has been succussful"),2000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(()=> rej("P3 has been succussful"),5000);
  setTimeout(()=> res("P3 has been succussful"),5000);
});

Promise.allSettled([p1,p2,p3])
.then((res) => console.log(res))
.catch((err) => console.error(err))