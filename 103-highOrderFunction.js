// What is a Higher Order Function?
// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

// There are several different types of higher order functions like map and reduce.


// Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);


function Multiplyby(arg){
    return function (value){
        return value * arg
    }
}
console.log(Multiplyby(3)(5));