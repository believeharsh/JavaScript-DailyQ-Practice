// The Window Object
// It represents the browser's window. All global JavaScript objects, functions, and variables automatically become members of the window object. Global variables are properties of the window object. Global functions are methods of the window object.



// Window Size
// Two properties can be used to determine the size of the browser window.

// Both properties return the sizes in pixels:

// window.innerHeight - the inner height of the browser window (in pixels)
// window.innerWidth - the inner width of the browser window (in pixels)
console.log(window.innerHeight)
console.log(window.innerWidth)


// Even the document object (of the HTML DOM) is a property of the window object:

window.document.getElementById("header");
// is the same as:
document.getElementById("header");



// const NewWindowOpen = () => {
//   window.open("https://www.google.com")
// }
// NewWindowOpen()