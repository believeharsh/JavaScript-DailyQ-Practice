const obj = {
    count: 10,
    doSomethingLater() {
      setTimeout(function () {
        // the function executes on the window scope
        this.count++;
        console.log(this.count);
      }, 300);
    },
  };
  
  obj.doSomethingLater(); // logs "NaN", because the property "count" is not in the window scope.


//   const obj = {
//     count: 10,
//     doSomethingLater() {
//       // The method syntax binds "this" to the "obj" context.
//       setTimeout(() => {
//         // Since the arrow function doesn't have its own binding and
//         // setTimeout (as a function call) doesn't create a binding
//         // itself, the "obj" context of the outer method is used.
//         this.count++;
//         console.log(this.count);
//       }, 300);
//     },
//   };
  
//   obj.doSomethingLater(); // logs 11