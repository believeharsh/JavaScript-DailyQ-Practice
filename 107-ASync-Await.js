// First Case : 

function test() {
    let res = fetch("https://jsonplaceholder.typicode.com/todos/1");
    res.json();
    console.log(res)
  }
  test(); // this will give error of res.json() in not a function 
  
  
  // Second Case : 
  function Test() {
    let response = 
    fetch("https://jsonplaceholder.typicode.com/todos/1");
      response.then(res => res.json()
      .then(d => {
        console.log(d)
      }))
  }
  
  Test();
  
  
  // third case 
  async function Check(){
    let Response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let Result = await Response.json();
    console.log(Result);
    
  }
  Check()
         
  