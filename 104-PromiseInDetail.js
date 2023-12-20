// What is Promise in JavaScript ?

// In JavaScript, a promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations in a more manageable and readable way compared to traditional callback-based approaches.

// A promise can be in one of three states:

// Pending: The initial state; the promise is neither fulfilled nor rejected.

// Fulfilled: The operation completed successfully, and the promise has a resulting value.

// Rejected: The operation failed, and the promise has a reason for the failure.

const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
        const success = false;

        if (success) {
            resolve("Operation successful");
        } else {
            reject("Operation failed");
        }
    }, 1000);
});

// Using the promise
myPromise
    .then((result) => {
        console.log(result); // Output: const succuss = ture ? Operation successful : Operation failed
    })
    .catch((result) => {
        console.log(result);
    });

//   The then method is used to handle the successful completion of the promise, and the catch method is used to handle any errors or rejections. Promises provide a more structured way to work with asynchronous code and avoid callback hell, making it easier to reason about and maintain asynchronous code.

// 1.Promise then() Method: It is invoked when a promise is either resolved or rejected. It may also be defined as a carrier that takes data from promise and further executes it successfully.

// Parameters: It takes two functions as parameters.

// The first function is executed if the promise is resolved and a result is received.
// The second function is executed if the promise is rejected and an error is received. (It is optional and there is a better way to handle error using .catch() method

let promise = new Promise(function (resolve, reject) {
    reject("Promise Rejected");
});

promise.then(
    function (successMessage) {
        console.log(successMessage);
    },
    function (errorMessage) {
        //error handler function is invoked
        console.log(errorMessage);
    }
);

//2. Promise catch() Method: It is invoked when a promise is either rejected or some error     has occurred in execution. It is used as an Error Handler whenever at any step there is a chance of getting an error.

// Parameters: It takes one function as a parameter.

// Function to handle errors or promise rejections.(.catch() method internally calls .then(null, errorHandler), i.e. .catch() is just a shorthand for .then(null, errorHandler) )



let promise2 = new Promise(function (resolve, reject) {
    reject('Promise Rejected')
})

promise2
    .then(function (successMessage) {
        console.log(successMessage);
    })
    .catch(function (errorMessage) {
        //error handler function is invoked 
        console.log(errorMessage);
    });


// ****** Example with fetch api function of JS

let fetchRes = fetch(
    "https://jsonplaceholder.typicode.com/todos/1");

// FetchRes is the promise to resolve
// it by using.then() method
fetchRes.then(res =>
    res.json()).then(d => {
        console.log(d)
    })


// ********** another Example

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

delay(1000)
    .then(() => console.log('Delayed operation complete'))
    .catch(error => console.error('Error:', error));