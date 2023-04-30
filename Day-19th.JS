
// let Section = 10;
// let trainees = 100;
// let batch = 5;

// let Batch_11 = {
//   SquadA : 25,
//   SquadB : 25,
//   SquadD : 20,
//   SquadE: 30,

//   task: {
//     introduce : "You have assigned special training" 
//   },
//   message() {
//   console.log("You are special one")
//   },
// }

// Batch_11.task

// console.log(Batch_11.task)
// Batch_11.price = 10000
//  console.log(Batch_11)

// factory function in javaScript 

function Createfunction(title) {
    return {
      title: title,
      enroll() {
        console.log("You are special one")
      }
  
    }
  
  }
  const Batch_11 = Createfunction('javaScript');
  
  
  
  
  // ... Constructor function 
  function Batch_2(title) {
    this.title = title,
      this.enroll = function() {
        console.log("Yor are successfully enroled");
      }
  }
  const Batch_12 = new function('title' , 
    `this.title = title,
    this.enroll = function() {
    console.log("Yor are successfully enroled")
      }`);
  
   const Batch_4 = new Batch_12('javaScript');
    Batch_4.enroll();
  
  
  //  primitive datatype: 
let number = 10;
let number2 = number;
number = 15;
console.log(number);
console.log(number2);

// reference data type : 
let obj = {number:10};
// Pass by reference 
let obj2 = obj;
obj.number = 15;
console.log(obj)
console.log(obj2)

// pass by value : 
const course = {
      title: 'javaScript',
      enroll() {
        console.log("You are special one")
      }
  
    }
// const  course_1 = { ...course }
// course_1.title = "C++"

// const course_2 = Object.assign({} , course)
// course_2.title = "React"

// for ( let key in course) {
//   console.log(key, course[key]);
// }
  for (let key of Object.keys(course)) {
    console.log(key, course[key]);
  }