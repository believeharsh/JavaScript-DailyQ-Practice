// document.addEventListener('DOMContentLoaded', function(){
//   let h = document.querySelector('.refresh');
//   setTimeout(() => (h.textContent = "new Text Contant"),500)
// });

document.addEventListener('keydown', function(e){
    console.log(e);
      if(e.key =='r' || e.key == 'G' && e.ctrlKey){
        e.preventDefault();
        console.log('ctrl + R disabled');
        
      }
    });
    
    
    let x = 10 
    let y = 1;
    ///The && operator will only return true if both conditions on either side of it are true.
    
    // console.log(x=10 && y>5)
    // // false
    // console.log(x > 12 && y<5)
    // // false
    
    // console.log(x = 10 && y < 2)
    // // true
    // console.log(x > 12 && y > 9)
    // // false 
    
    
    // Or || operator : 
    
    console.log(x == 10 || y>2 ) // true 
    console.log( x < 12 || Y< 2 ) // true
    console.log(x > 12 || y< 2)// ture 
    console.log(x == 12 || y == 5) // false
    
    // Or (||) operator will only return false if both conditions on either side will be false; 