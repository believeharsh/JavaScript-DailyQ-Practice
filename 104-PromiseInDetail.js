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
  .catch((result)=>{
    console.log(result)
  })

//   The then method is used to handle the successful completion of the promise, and the catch method is used to handle any errors or rejections. Promises provide a more structured way to work with asynchronous code and avoid callback hell, making it easier to reason about and maintain asynchronous code.