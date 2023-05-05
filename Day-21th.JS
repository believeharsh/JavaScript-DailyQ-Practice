function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  const myFather = new  Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  console.log(myFather);
  console.log(myMother);


  let random = {
    name : "harsh",
    language : "JavaScript"
  }
  let v1 = {
    real : "Dahiya"
  }
  random.__proto__ = v1;
  
  v1.__proto__ = {
    final : "fronted developer"
  }
  console.log(random.final)
  
  
  
  
  
  
  