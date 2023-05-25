// This keyword in JavaScript : 
// this keyword refers to an object, that object which is executing the current bit of javascript code. In other words, every javascript function while executing has a reference to its current execution context, called this. Execution context means here is how the function is called.

// : A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

// const test = {
//   prop: 42,
//   func: function() {
//     return this.prop;
//   },
// };

// console.log(test.func());
// Expected output: 42



function getThis() {
    return this;
  }
  
  const obj1 = { name: "obj1" };
  const obj2 = { name: "obj2" };
  
  obj1.getThis = getThis;
  obj2.getThis = getThis;
  
  console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
  console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
  
  const obj3 = {
    __proto__: obj1,
    name: "obj3",
    class : "harsh Dahiya"
  };
  
  console.log(obj3.getThis()); // { name: 'obj3' }
  
  const obj4 = {
    name: "Harsh Dahiya ",
    getThis() {
      return this;
    },
  };
  
  const obj5 = { name: "Shubham bhatt " };
  
  obj5.getThis = obj4.getThis;
  console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }
  console.log(obj4.getThis());
  
  
  function getThisStrict() {
    "use strict"; // Enter strict mode
    return this;
  }
  
  // Only for demonstration — you should not mutate built-in prototypes
  Number.prototype.getThisStrict = getThisStrict;
  // console.log(typeof ("harsh").getThisStrict()); // "number"
  
  
  class Car {
    constructor() {
      // Bind sayBye but not sayHi to show the difference
      this.sayBye = this.sayBye.bind(this);
    }
    sayHi() {
      console.log(`Hello from ${this.name}`);
    }
    sayBye() {
      console.log(`Bye from ${this.name}`);
    }
    get name() {
      return "Ferrari";
    }
  }
  
  class Bird {
    get name() {
      return "Tweety";
    }
  }
  
  const car = new Car();
  const bird = new Bird();
  
  // The value of 'this' in methods depends on their caller
  car.sayHi(); // Hello from Ferrari
  bird.sayHi = car.sayHi;
  bird.sayHi(); // Hello from Tweety
  
  // For bound methods, 'this' doesn't depend on the caller
  bird.sayBye = car.sayBye;
  bird.sayBye(); // Bye from Ferrari