let num = [3,54,1,2,3,1];
// for(let i=0; i<num.length; i++){
//   console.log(i)
// };

// num.forEach((element) => {
//   console.log(element * element)  //forEach loop in js
// })

// Array.from 
// let name = "harry"
// let arr = Array.from(name);
// console.log(arr) 

// for of loop in javascipt
// for (let i of num){
//   console.log(i)
// }
// for(let i in num){
//   console.log(num[i])
// }

// let a = num.map((value)=> {
//   console.log(value)
//   return value + 1
// })
let a = num.map((value,index,array)=> {
  console.log(value,index,array)
  return value + 1  /// we can pass three argumants into arr.map methods
})

console.log(a)


// Array filter mathod 
let sec_arr = [2,3,4,5,6,7];
let second = sec_arr.filter((a)=> {
  return a<3
})
console.log(second)
let ReduceMethod = [1,2,3,4,5,1];
const Fun_ReduceMehthod = ReduceMethod.reduce((value1, value2)=> {
  return value1 + value2
})
console.log(Fun_ReduceMehthod)