// .................... String in JavaScript ...............................
let first = "Harsh-Dahiya is BCA Guy who is aspiring fronted developer";

let sec = 'Badrinath is the first dhama of char dham of Hindu religion which is build in stya Yuga ';

let third = "Raameshwaram is the second dhama which is built by Lord Rama during the rescue of his wife seeta in Treta Yuga.";

let fourth = `Dwaraka, got it's importance in the Dvapara Yuga when Krishna made Dwaraka his residence instead of Mathura.`;

let fifth = "Puri, Vishnu is workshiped as Jagannatha, his avatara for the current epoch i.e Kali Yuga";

let sixth = `'Uttarakhand' viz. Yamunotri, Gangotri , kedarnath , and Badrinath is referred to as Chota Char Dham`;

let seventh = "Happy learning";



// console.log(sec.charAt(1)); // charAt method 

// console.log(first[1]); // kind of numarial index 

// const func = function areEqualCaseInsensitive(first, sec) {
//   return first.toUpperCase() === sec.toUpperCase();  // 
// }
// console.log(func('HARSH' , 'DAHIYA')) // it will return false 

// console.log(typeof first); 

// const s1 = "2 + 2"; // creates a string primitive
// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2)); // returns the string "2 + 2"
// console.log(eval(s2.valueOf())); // returns the number 4

// console.log(third.slice(7, 75));
// console.log(third.slice(25));
// console.log(third.slice(-25));
// console.log(third.slice(-25, -20));



console.log(third.substring(10, 20));
console.log(third.substr(10, 20));

console.log(third.replace('seeta', 'harsh'))
console.log(third.replaceAll('seeta', 'harsh'))

console.log(third.toUpperCase());
console.log(third.toLowerCase());
console.log(third.concat(seventh));

console.log(third.trim())
console.log(third.split(","))
console.log(third.split(" "))
console.log(third.split("|"))



