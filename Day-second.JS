// Date 4th of April 2023 
// Question No. 3 
      // Write a javaScript function which resove a promise after n seconds . The 
      // functon takes n as a parameter . Use IIFE to excute the function with 
      // different values of n . 
      const prc = async (text, n )=> {
        return new Promise ((resolve , reject ) => {
          setTimeout(() => {
            resolve(text)
          }, 1000*n)
        })
      };
      
      (
        async () => {
        let b = await prc ("I'm resolving after just three seconds " , 3)
          console.log(b)
        let c = await prc ("I'm resolving after just four seconds " , 4)
          console.log(c)
        let r = await prc ("I'm resolving after just one  seconds " , 1)
          console.log(r)
        }
      ) ()
      
      // **************************************************************************
      
      // Question No. 4 
      // Write a Simple interest calculator using javaScipt . 
      function simple(p, r, t ) {
        return (p*r*t) / 100 
      }
      
      let use = [10000 , 5, 1 ]
      console.log(simple(...use));
      
      
      // **************************************************************************