// What is heap ??
// 

// In JavaScript, the "heap" refers to a region of memory used for dynamic memory allocation. This is where objects, closures, and other dynamically allocated data are stored. When you create objects or arrays in JavaScript, they are allocated memory on the heap.

// JavaScript uses automatic memory management, also known as garbage collection, to handle memory allocation and deallocation. The garbage collector is responsible for identifying and reclaiming memory that is no longer in use, preventing memory leaks.

// Objects on the heap can be referenced by variables in your code. When an object is no longer reachable (i.e., there are no references to it), it becomes eligible for garbage collection, and the memory it occupies can be reclaimed.

// Understanding the heap and how memory is managed can be important for optimizing the performance of your JavaScript code, especially in scenarios where memory usage is a concern. It's worth noting that most developers don't need to explicitly manage memory in JavaScript, as the language's garbage collector takes care of memory management automatically.

// the most impotant thing here is that the heap will always provide the refrence to the other varibale or user queries which means if any changes will done then it will be also change on main varibale as well. 
// All the non-Primitive data types goes into the heap. 


let myInstagram = "bontinue_";
let newInstagram = myInstagram;
newInstagram = "yourgrowth11"
console.log(myInstagram);


console.log(newInstagram)


let userone = {
  email : "harshDahiya11@gamil.com"
}
let usertwo = userone;
usertwo.email = "new@google.com";
console.log(userone.email)
console.log(usertwo.email)