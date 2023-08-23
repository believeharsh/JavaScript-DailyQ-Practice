// The JavaScript allows static methods that belong to the class rather than an instance of that class. Hence, an instance is not needed to call such static methods. Static methods are called on the class directly. It can be of any name. A class can contain more than one static method. If we define more than one static method with the same name, the last method is invoked by JavaScript. “this” keyword is used to call a static method within any other static method in JavaScript.
class Animal {
    constructor(name) {
      // this.name = Animal.capitalize(name)
      this.name = name
    }
    walk() {
      alert("Animal " + Animal.capitalize(this.name) + " is walking")
    }
    static capitalize(name) {
      return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
  }
  
  j = new Animal("jack")
  j.walk()
  
  // console.log(j.capitalize("thisa")) // --- > this doesnt work
  // let testing = new Animal("dog")
  // testing.walk()