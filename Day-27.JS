// Date 10th - may 2023 

// Practise of closure : 
const people = function(a , b , c) {
    let name = "Harsh-Dahiya";
    let conctinate = a + b + c ;
    console.log(name)
    console.log(conctinate);
    return {
      getonename : function() {
        return a ;
      },
      gettwoname : function() {
        return a + b ;
      },
      getthreename : function() {
        return a + b + c ; 
      }
    }
      
  }
  console.log(people("Virat, " , "Rohit, " , "MahiBhai"));
  const store = people("KL-Rahul, " , "surya, " , "Rishab");
  console.log(store.getonename() );
  console.log(store.gettwoname() );
  console.log(store.getthreename() );
  
  // const last = people("Harsh" , "Bontinue" , "YoreGrowth11");
  
  // console.log(last.getonename() );
  // console.log(last.gettwoname() );
  // console.log(last.getthreename() );


  // arrow function practise 
  
const sayHello = name => {
    console.log("greeting" + " " + name)
    console.log("hi")
  }
  
  const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30,
    show: function() {
      // let that = this
      // console.log(this)
      setTimeout(() => {
        console.log(`The name is ${this.name}\nThe role is ${this.role}`)
      }, 2000)
    }
  }
  sayHello("Harry", "Good Afternoon")
  console.log(x.name, x.exp)
  x.show()


  const phones = {
    Mi : "redmi-note8-Pro",
    Sam : "sigma 52",
    oppo : "f9",
    Vivo : "vivo-v-15",
    best : function() { 
      console.log("your Redmi-note8-Pro")
       setTimeout(() => {
      console.log(`the redmi phone is ${this.Mi} or the vivo phone 
                   is ${this.Vivo}`)
        },2000)
      }
    
    }
    
  // console.log(phones.Mi , Phones.Sam),
    let execute = console.log(phones.best());
  console.log(execute);