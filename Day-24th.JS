var map = function(arr, fn) {
    var mappedArray = [];
    for (var i = 0; i < arr.length; i++) {
      mappedArray.push(fn(arr[i], i));
    }
    return mappedArray;
  };
  let retured_arr = map([1,2,3]);
  console.log(retured_arr)