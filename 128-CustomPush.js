Array.prototype.MyPush = function(...elements){
    for(let i = 0; i<elements.length; i++){
       this[this.length] = elements[i];

    }
    return this.length;
}

const array = [1,2,3, 4];
array.MyPush(8, 9, 10)
console.log(array)