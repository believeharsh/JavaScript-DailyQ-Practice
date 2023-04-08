function Check_array(Arr) {
    if(toString.call(Arr) === "[Object-Array]") 
        return true; 
        return false; 
   
};

console.log(Check_array("Harsh-Dahiya"));
console.log(Check_array([1,2, 3, 4]));