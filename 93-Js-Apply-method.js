// Apply function In js: 
// const person = {
//     firstName: 'John',
//     lastName: 'Doe'
// }
// function greet(greeting, message, extra) {
//     return `${greeting} ${this.firstName} ${message} ${extra}`;
// }
// let result = greet.apply(person, ['Hello', 'How are you?', 'godd to see you again']);

// console.log(result);

//The apply() method allows an object to borrow the method of another object without duplicating the code.

const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};
const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};
let result = computer.turnOn.apply(server);
let secondResult = computer.turnOff.apply(server);

console.log(result);
console.log(secondResult)

//The apply() method allows you to append elements of an array to another:
let arr = [1, 2, 3];
// let numbers = [4, 5, 6];
let numbers = {
    innerarr: [4,5,6],
    secarr : [10, 11, 12, 13, 14535],

}

arr.push.apply(arr, numbers.innerarr);

console.log(arr);

//The apply() method invokes a function with a given this value and arguments provided as an array.