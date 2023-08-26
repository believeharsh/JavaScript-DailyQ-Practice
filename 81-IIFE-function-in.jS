//JavaScript provides a variety of methods to define and execute Functions, there are named functions and anonymous functions, and then there are Functions that are executed as soon as they are mounted, these functions are known as Immediately Invoked Function Expressions or IIFEs.
let a = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(456)
      }, 2000)
    })
  }
  
  (async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
  })()
  
  
  // console.log(d) // Throws error