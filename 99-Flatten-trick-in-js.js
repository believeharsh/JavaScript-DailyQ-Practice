
// In JavaScript, the term "flatten" is often used in the context of flattening arrays. Flattening an array means converting a nested array structure into a flat, one-dimensional array. This process is common when you have an array that contains other arrays, and you want to transform it into a simpler structure.

function flattenArray(arr) {
    let flatArray = [];

    arr.forEach((element) => {
      if (Array.isArray(element)) {
        // If the element is an array, recursively call flattenArray
        flatArray = flatArray.concat(flattenArray(element));
      } else {
        // If the element is not an array, add it to the flatArray
        flatArray.push(element);
      }
    });

    
    return flatArray;
  }

  const nestedArray = [10,22, [24,25,[25,26]], ["it is quite effective"]];
  const flattenedArray = flattenArray(nestedArray);

  console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

const nestedArray1 = [1, [2, [3, 4], 5], 6];
const flattenedArray1 = nestedArray1.flat(Infinity);
console.log(flattenedArray1);
// Output: [1, 2, 3, 4, 5, 6]