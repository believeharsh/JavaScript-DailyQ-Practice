// Date : 2 May 2023 
// Q . 1. Write a JavaScript program to list the properties of a JavaScript object
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

// let List_Properties_JS = {
//   Name : "JavaScript",
//   Core : "Important", 
//   Uses : "Multiple" , 
//   Duration : 3, 
//    Author : {
//         introduction : "Harhs Dahiya"
//     },
//    Message(){
//   console.log("Now a days JavaScript is one of the most vital language in the world" )
//   }
// }

// function New_function(title) {
//    return {
//       title: title,
//       enroll() {
//         console.log("You are special one")
//       }
  
//     }
// }
// console.log(List_Properties_JS);
// List_Properties_JS.Message();
// List_Properties_JS = New_function("JavaScript")
// console.log(List_Properties_JS);


// Q.no 2 : 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// let student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12,
// };
// console.log(student)
// delete student.rollno;
// console.log(student)



// let student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12,
// };
// console.log(student);

// function remove() {
//   console.log(delete student.rollno)
// }
// const harsh = remove();
// console.log(harsh)

// Date 4th of may 2023 
// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// let  library = {
//     first : {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     second : {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//    third : {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }
//  };
 
//  console.log(library.first )
//  console.log(library.second )
//  console.log(library.third )

// Question no. 6 : 5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes. 
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

// function Cylinder(cyl_height, cyl_diameter) {
//   this.cyl_height = cyl_height;
//   this.cyl_diameter = cyl_diameter;
// }

// Cylinder.prototype.Volume = function () {
//   var radius = this.cyl_diameter / 2;
//   return this.cyl_height * Math.PI * radius * radius;
// };

// var cyl = new Cylinder(7, 4);
// // Volume of the cylinder with four decimal places.
// console.log('volume =', cyl.Volume().toFixed(4));


class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    getVolume()  {
      const radius = this.radius;
      const height = this.height;
      const volume = Math.PI * radius * radius * height;
      return volume.toFixed(1);
    }
  }
  
  const cylinder = new Cylinder(5, 10);
  console.log(cylinder.getVolume());  // prints "785.4"
 