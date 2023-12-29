// What is Async in JavaScript ?

// Async, short for asynchronous, is a programming technique that allows a program to run multiple tasks at the same time. This is in contrast to synchronous programming, where tasks are executed one at a time.

// Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.

const p = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise is resolved now !!");
  }, 10000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise2 is resolved now !!");
  });
});

const getdata = async function () {
  console.log("pre console of promise1");
  let val1 = await p;
  // line 13 will wait until val1 gets the value of promise p to be resolved and reject
  // await can only be used inside in async function only
  console.log("JavaScript Practice ");
  console.log(val1);
  console.log("pre console of promise2");

  let val2 = await p2; // Now this line again wait for 5 minutes
  console.log("JavaScript Practice ");
  console.log(val2);
};

// If wrap up the promises with setTimeout in one particular funciton then all the promises will be resolved in the maximum time of promise.
getdata();
// let Resofgetdata = getdata();
// console.log(Resofgetdata)

// Resofgetdata.then((res) => console.log(res));

// Let's use the async and await together :

// Real world example of fetch funciton in javaScript :

const apiurl = "https://api.github.com/users/believeharsh";
async function Handledata() {
  try {
    const data = await fetch(apiurl);
    const jsonvalue = await data.json();
    console.log(jsonvalue);
  } catch (err) {
    console.log(err);
  }
  // data.then((res) => res.json()).then((res) => console.log(res))
  // This will give an error which is : data.then() is not a funciton
}
Handledata();
