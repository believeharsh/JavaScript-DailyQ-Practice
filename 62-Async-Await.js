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
  
  
  // async function harry(){
  //   return 5
  // }
  // harry().then((x)=>{
  //   alert(x)
  // })