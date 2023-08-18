class Animal {
    constructor(name, color){
      this.name = name;
      this.color = color;
      
    }
    run(){
      console.log(this.name + " " + "is running hurray")
      
    }
    shout(){
      console.log(this.name + " " + "is shouting")
    }
  }
  
  class Monkey extends Animal {
    EatBanana(){
      console.log(this.name + " " + "is eating banana")
    }
    Devotee(){
      console.log(this.name + "" + "Jii is the biggest devotee of Lord Rama")
    }
  }
  
  let firstMonkey = new Animal("champoo", "white")
  let NayaMonkey = new Animal("NayaChampoo", "white")
  let thirdMonkey = new Monkey("shera" , "gray")
  let BigDevotees = new Monkey("Hanuman " , "Sarvshresta")
  firstMonkey.shout()
  NayaMonkey.run()
  thirdMonkey.EatBanana()
  BigDevotees.Devotee()
  
  
  // extending classes using inheritence and extend keyword
  
  
  
  
  
  