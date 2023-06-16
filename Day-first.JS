//  Date 3rd of April 2023 
 // Question No. 1
//  Write a JavaScript Program to print the following after 2 seconds delay  
     // 1. Hello 
     // 2. hello World 

     const a = async (text )=> {
        return new Promise ((resolve , reject ) => {
          setTimeout(() => {
            resolve(text)
          }, 2000)
        })
      }
      
      (
        async () => {
        let b = await a ("harsh")
          console.log(b)
        let c = await a ("harsh-Dahiya")
          console.log(c)
        }
      ) ()
      
      //**************************************************************************
      
      //  Question No. 2 
        // Write a JavaScript Program to find avarge of Numbers in an array using 
        // spread syntax ? 
      
      function sum  (a, b, c )  {
        return a + b + c
      }
      
      let x =[10,  10 , 10 ]
      console.log(sum(...x)); 
      
      // **************************************************************************
      
      

      document.querySelector(".container")