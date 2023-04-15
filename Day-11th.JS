// var x = 0;
// var array = Array();

// function add_element_to_array()
// {
//  array[x] = document.getElementById("text1").value;
//  alert("Element: " + array[x] + " Added at index " + x);
//  x++;
//  document.getElementById("text1").value = "";
// }

// function display_array()
// {
//    var e = "<hr/>";   
    
//    for (var y=0; y<array.length; y++)
//    {
//      e += "Element " + y + " = " + array[y] + "<br/>";
//    }
//    document.getElementById("Result").innerHTML = e;
// }

function removeDuplicates(num) {
    var x,
        len=num.length,
        out=[],
        obj={};
   
    for (x=0; x<len; x++) {
      obj[num[x]]=0;
    }
    for (x in obj) {
      out.push(x);
    }
    return out;
  }
  var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
  result = removeDuplicates(Mynum);
  console.log(Mynum);
  console.log(result);
  
