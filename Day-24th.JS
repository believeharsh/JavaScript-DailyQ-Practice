var map = function(arr, fn) {
    var mappedArray = [];
    for (var i = 0; i < arr.length; i++) {
      mappedArray.push(fn(arr[i], i));
    }
    return mappedArray;
  };
  let retured_arr = map([1,2,3]);
  console.log(retured_arr)


  // few example of the closures : 
  // Date 9th of may 2023 
// Closure : A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

let sum = function(a, b, c) {
  return {
    getsumtwo: function() {
      return a + b;
    },
    getsumthree: function() {
      return a + b + c;
    }

  }
}
let store = sum(2, 3, 4)
// console.log(store);
console.log(store.getsumtwo());
console.log(store.getsumthree());

const store_first = sum(10, 20, 30)
console.log(store_first.getsumtwo());
console.log(store_first.getsumthree());

// let demo = function (a , b , c) {
//   console.log("Hello Beginner" + a );
//   let c1 = 4;
//   return function(b) {
//     return a + b + c1;
//   }
// }

// let final = demo(2,3,4);
// console.log(final(10))
// console.log(final(20))


