async function harry(){
    let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("27 deg")
    },1000)
  })
  let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("27 deg plesant")
    },2000)
  })  
    console.log("P1 is coming")
    let ValueP1 = await p1
    console.log("p1 fetched" + ValueP1)
      console.log("P2 is coming" )
    let ValueP2 = await p2
      console.log("p2 fetched" + ValueP2)
    return[ValueP1, ValueP2]
  
    
  }
  async function charry(){
    console.log("Hey I'm cherry and I am   waiting for harry")
    
  }
  const main = async()=> {
    let check = await harry();
    let Charrycheck = await charry();
  
  }
  
  
  
  main()
  
  
  // geeks for geeeks : reference 
// const getData = async () => {
//     let data = "Hello World";
//     return data;
// }
 
// getData().then(data => console.log(data));

// const getData = async () => {
//     let y = await "Hello World";
//     console.log(y);
// }
 
// console.log(1);
// getData();
// console.log(2);


function asynchronous_operational_method() {
  let first_promise =
      new Promise((resolve, reject) => resolve("Hello"));
  let second_promise =
      new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(" GeeksforGeeks..");
      }, 1000);
  });
  let combined_promise =
      Promise.all([first_promise, second_promise]);
  return combined_promise;
}

async function display() {
  let data = await asynchronous_operational_method();
  console.log(data);
}

display();
