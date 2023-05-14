// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });


// 
// <div id="foo\bar"></div>
// <div id="foo:bar"></div>


console.log("#foo\bar"); // "#fooar" (\b is the backspace control character)
document.querySelector("#foo\bar"); // Does not match anything

console.log("#foo\\bar"); // "#foo\bar"
console.log("#foo\\\\bar"); // "#foo\\bar"
document.querySelector("#foo\\\\bar"); // Match the first div

document.querySelector("#foo:bar"); // Does not match anything
document.querySelector("#foo\\:bar"); // Match the second div
