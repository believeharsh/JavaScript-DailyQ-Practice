// calback functions 
function loadscript(src , callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = function() {
      console.log("script loaded : " + src)
      callback(null, src)
    }
     script.onerror = function() {
       console.log("error loading script with src : " + src)
       callback(new Error("src got new error"))
     }
    document.body.appendChild(script);
  }
  function hello(src){
    // alert("hello brohter")
    console.log("hiiiiiii" + src)
  }
  function goodmorning(error , src){
    if(error){
      console.log(error);
      return
    }
    // alert("hello seocnd brohter")
    console.log("goodmorning" + src);
  }
  loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" , goodmorning )
  