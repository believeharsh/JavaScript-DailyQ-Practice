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