// What is the control statements in JavaScript ? 
// Control statements are designed to allow you to create scripts that can decide which lines of code are evaluated, or how many times to evaluate them. There are two different types of control statements: conditional statements and loop statements.
 
// control statements are: 
//   1. if...else 
//   2. switch 
//   3. for : 
//   4. while : 
//   5. do.. while 
//   6. for.. in 
//   7. for .. of 
//   8. break and continue 


// first : if..else     : ( used for making decision based on conditions)

// let Number = 10;
// if(Number<11){
//     console.log(Number);
// }
// else console.log("Condition failed")


// second : switch      : ( provides a way to handle multiple conditions in a more concise    
// manner).


// third : for          : ( used for iterating over a block of code a specified number of times)

// for(let i = 0 ; i<5 ; i++){
//     console.log(i)
// }


// fourth : while       : ( executes a block of code as long as specified conditions is ture)

// let count = 0;
// while(count < 3 ){
//     console.log(`count is : ${count}`);
//     count++;
// }

// fifth : do..while    : ( similar to while but the block of code executed once at least before the conditions is checked)

let text = "";
let i = 0;
do {
  text += i + 'br' ;
  console.log(text)
  i++;
}
while (i < 5);


// sixth : for..in      : ( used for iterating over the properties of object)
// let person = {
//     name:"Harsh",
//     age:30,
//     gender:"male"
// }
// for(let key in person){
//     console.log(`${key} :  ${person[key]}`)
// }

// seventh : for..of    : ( introduced in ecamascript6 used for iterating over iterable objects like array and strings).
// let colors = ["red", "yellow", "Blue", "green", "white"];
// for(let color of colors){
//     console.log(color)
// }