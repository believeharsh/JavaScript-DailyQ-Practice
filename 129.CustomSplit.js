String.prototype.MySplit = function(delimeter){

    let Result = [];
    let StartIndex = 0; 
    let foundIndex = this.indexOf(delimeter);

    while(foundIndex !== -1){
        Result.push(this.substring(StartIndex, foundIndex))
        StartIndex = foundIndex + delimeter.length;
        foundIndex = this.indexOf(delimeter , StartIndex);
    }

    Result.push(this.substring(this.StartIndex))
    return Result

}

const str = 'My Name Is Harsh Dahiya';
 const Res = str.MySplit(", ")
console.log(Res)