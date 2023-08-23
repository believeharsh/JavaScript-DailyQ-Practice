class animal {
    constructor(name){
      this.name = name
    }
    fly(){
      console.log("mai ud raha hu :)")
    }
    get name(){
      return this._name
    }
    set name(newname){
      this._name = newname;
    }
  }
  
  class rabbit extends animal {
    eatcarrot(){
      console.log("eating carrot")
    }
  }
  let a = new animal("bruno")
  a.fly()
  console.log(a.name)
  a.name = "jack"
    console.log(a._name)
  
  let c = 56;
  let f = new rabbit("doly")
  console.log(a instanceof animal )
  console.log(f instanceof animal )