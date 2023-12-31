// What is heap ??
// The heap is a region of memory in a computer where variables are stored and managed during runtime. JavaScript is a garbage-collected language, which means that the programmer doesn't have to worry about explicitly freeing memory when it's no longer needed. Instead, the JavaScript engine will automatically reclaim memory that is no longer being used

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