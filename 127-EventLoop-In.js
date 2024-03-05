// What is event loop in JavaScript and Is it the part of JavaScript or Browser tell me in detailed and keep it simple language ? 


// Event Loop in JavaScript:

// What is it?

// The event loop is like the brain of JavaScript that manages how your code runs, especially when dealing with things that take time, like fetching data or waiting for a user to click a button.
// Part of JavaScript or Browser?

// It's a part of JavaScript. When we say "JavaScript runs in the browser," it means the browser has a JavaScript engine (like V8 in Chrome or SpiderMonkey in Firefox), and the event loop is a crucial part of this engine.
// How Does it Work?

// Imagine you have a to-do list for your JavaScript tasks. The event loop looks at the list and picks one task at a time to complete.
// When a task takes a while, like waiting for data, the event loop doesn't just stop everything. Instead, it puts that task aside and checks the list for other things to do.
// Call Stack and Queue:

// There's a "call stack" that keeps track of what your code is doing. When a function runs, it goes on the stack. When it's done, it comes off the stack.
// There's also a "queue" (or message queue) for tasks that are waiting to be done. The event loop checks this queue and moves tasks from the queue to the stack.
// Example:

// Let's say you click a button, and JavaScript needs to do something. That task goes into the queue.
// The event loop sees the task, checks if the stack is clear, and if so, moves the task to the stack for execution.
// Async Operations:

// Some things, like fetching data or setting timeouts, take time. Instead of freezing everything, JavaScript uses callbacks and promises.
// When these async operations finish, their callbacks go to the queue. The event loop takes care of moving them to the stack when it's ready.
// Keep it Running:

// The event loop keeps running as long as there are tasks to do. It ensures that your code runs smoothly without freezing, handling both synchronous and asynchronous operations.
// In summary, the event loop is a fundamental part of JavaScript that makes it possible to handle multiple tasks without freezing your entire program. It's like the conductor of an orchestra, making sure each instrument plays its part in harmony.


// How does an event loop resolve the priority among multiple things available to be put on the JS callstack?

// In JavaScript, the event loop is a crucial mechanism that allows the language to handle asynchronous operations efficiently. The event loop constantly checks the message queue for new messages and processes them one at a time, putting them on the call stack for execution.

// Here's a simplified overview of how the event loop manages the priority among multiple tasks in JavaScript:

// Call Stack:

// The call stack is a data structure that keeps track of the currently executing function or code block. When a function is called, it's added to the top of the call stack. When the function completes, it's removed from the stack.
// Callback Queue (Message Queue):

// Asynchronous tasks, such as callbacks from timers, user interactions, or AJAX requests, are not executed immediately. Instead, they are pushed into the callback queue (also known as the message queue).
// Event Loop:

// The event loop constantly checks the call stack and the callback queue.
// If the call stack is empty, the event loop takes the first message from the callback queue and pushes it onto the call stack for execution.
// If the call stack is not empty, the event loop waits until it's empty before processing the next message from the callback queue.
// Priority:

// Tasks are processed in the order in which they were added to the callback queue. The first task in the queue is the first one to be executed.
// However, there are exceptions to this rule. Certain tasks, such as microtasks, are given higher priority over regular tasks. Microtasks are typically created by promises and have their own queue.
// Microtasks:

// Microtasks have a higher priority and are processed before regular tasks. They are often used by promises. When a promise is settled (either resolved or rejected), its associated callbacks (microtasks) are queued for execution.

console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise microtask');
});

console.log('End');