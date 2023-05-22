// Date 22th May 2023 Harsh Dahiya 
// function outer() {
//   let counter = 0;

  //   function incrementCounter() {

  //     // we have access to counter here even though it's defined in the parent scope
  //     counter += 1;
  //     return counter;
  //   }
  //   return incrementCounter;
  // }

  // let myFunc = outer();
  // console.log(myFunc()); // 1


  if (Math.random() > 0.5) {
    var x = 1;
  } else {
    var x = 2;
  }
  console.log(x);



function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
