let loadscript = (src) => {
    return new Promise((resolve, reject) => {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      document.body.appendChild(script);
     script.onload = ()=> {
        resolve("Your script has been loaded sir, congratulations ")
      }
      script.onerror = () => {
        reject(0)
      }
    }).console
  }
  
  let scripturl =  loadscript("https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js");
  scripturl.then((value) => {
    console.log(value)
    return loadscript("https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js")
  }).then((value) => {
    console.log("second script is waiting for loading sir")
    return  loadscript("https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js");
  }).then((value) =>{
    console.log("second script has been uploaded")
      return loadscript("https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js");
  }).then((value)=> {
    console.log("why are You loading  scripts again and again??????")
  }).catch((error) => {
    console.log("Your script has some Issue, try to reload after few seconds")
  })
  
  
  // expected result in console : 
  // Your script has been loaded sir, congratulations 
  //   second script is waiting for loading sir
  //   second script has been uploaded
  //   why are You loading  scripts again and again??????