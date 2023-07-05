// printing the constants in Math object
let m = Math;

console.log(m)
console.log(`The value of Math.E is `, Math.E)
console.log(`the Value of Math.PI` , Math.PI)
console.log(`the Value of Math.PI` , Math.LN2)
console.log(`the Value of Math.PI` , Math.SQRT1_2)


// functions 
let a = 34.6457;
let b = 89;
console.log("the value of a and b is", a, b);
console.log("the value of a and b rounded is" , Math.round(a), Math.round(b));  // Math.round

console.log("3 raised to the power of 2 " , Math.pow(3,2));  // Math.pow

console.log("sqrt of 144 is", Math.sqrt(144)); // Math.sqrt
console.log("sqrt of 625 is", Math.sqrt(625)); // Math.sqrt
console.log("sqrt of 1725 is", Math.sqrt(1725)); // Math.sqrt

console.log("ceil function (round up to the nearest integer) = ", Math.ceil(5.8));   //Math.ceil
console.log("floor function (round down to the nearestt interger) = ", Math.floor(5.8));  // Math.floor

console.log("absolute value of the numbers" , Math.abs(5.66));  // Math.abs
console.log("absolute value of the numbers" , Math.abs(-5.66)); //Math.abs

// trignometry function in JavaScript 
console.log("the value of the sin(pi) is = " , Math.sin(Math.PI/2)) 
console.log("the value of the tan(pi) is = " , Math.tan(Math.PI/2))
console.log("the value of the cos(pi) is = " , Math.cos(Math.PI/2))

// Min and Max functions 
console.log("minimium value of 4,5,6 is = " , Math.min(4,5,6));
console.log("maximum  value of 4,5,6 is = " , Math.max(4,5,6));


// Generating random numbers IN JavaScript
const r = Math.floor(Math.random() * 20 );
let x = 1;  
// If you want to generate random interger number the you should aviod the initial declaration, instead , you should write whole formula into declration . 

let y = 100;

let fifty = 50;
let sixty = 600;

const Fif_six_random = fifty + (sixty - fifty)*Math.random();

const R1_100 =  x + (y-x)*Math.floor(Math.random());

console.log("the random number is ", r ) ; // [printing random number]
console.log("the random between 1 to 100 IS = " , R1_100);
console.log("the random between 50 to 60 IS = " ,Fif_six_random);



let try1 = Math.floor((Math.random() * 100) );
let try2 = Math.floor((Math.random() * 100) + 1 );

console.log(try1)
console.log(try2)

const r1_100 = Math.floor(Math.random() * 1 + (100-1));
const r50_60 = Math.floor(Math.random() * 50 + (60-50));

console.log(r1_100)
console.log(r50_60)


