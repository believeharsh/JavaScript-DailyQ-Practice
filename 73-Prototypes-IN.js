const a = {
    first_console : console.log("hi we are learning Prototype in Js"),
     second_console : console.log("this is object a : great learing brother"),
   
   }
   console.log(a)
   
   let Sec_A ={
     third_console : console.log("we are entering in prototype of a "),
     third_run: () => {
     console.log("we got the prototype of a")
     }
   }
   a.__proto__ = Sec_A
   a.third_run()
   
   let Sec_B ={
     fourth_console : console.log("we are entering in prototype of Sec_A "),
     fourth_run: () => {
     console.log("we got the prototype of Sec_A")
     }
   };
   
   Sec_A.__proto__ = Sec_B
   a.fourth_run()
   
   // that is how the chain of  prototype works one by one ; 
   