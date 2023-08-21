class Employee {
    constructor(name) {
      console.log(`${name} - employee's constructor is here`)
      
    }
    login(){
      console.log(`employee has logged in`)
    }
    logout(){
      console.log(`Employee has logged out`);
      
    }
    requestLeaves(leaves){
      console.log(`employee has requested ${leaves} leaves - Auto approved`)
    }
  }
  class Programmer extends Employee {
    constructor(name){
      super(name)
      console.log(`this is a newly written constructor`)
    }
    requestCoffee(x){
      console.log(`emplyoee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
      super.requestLeaves(4)
      console.log("one extra is granted")
    }
    logout(){
      super.logout()
      console.log("It is not recommended to loged out oftenly at a time : careful ")
    }
  }
  let e = new Programmer("harsh")
  e.login()
  e.requestLeaves(3)
  e.logout()
  
  