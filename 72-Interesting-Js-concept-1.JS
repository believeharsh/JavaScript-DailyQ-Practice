
// In JavaScript, NaN is short for "Not-a-Number". In JavaScript, NaN is a number that is not a legal number. The Global NaN property is the same as the Number. Nan property.

// const x = NaN;
// if(x!==x){
//   console.log('hello fatfish')
// }
// console.log(NaN == NaN) // false
// console.log(x!==x) // true
// console.log(Number.isNaN(x)) //ture

// const y = NaN ;
// if(!isNaN(y) && y !==y){
//   console.log("Hello Harsh Dahiya")
// }
// console.log("harsh")
// console.log(Number.NaN)

window.x = 0
Object.defineProperty(window, 'x', {
  get(){
    return Math.random()
  }
})
console.log(x)
console.log(x === x)
console.log(x !== x)