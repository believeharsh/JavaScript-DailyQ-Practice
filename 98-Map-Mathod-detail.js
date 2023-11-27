// Description
// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.

// syntax
// array.map(function(currentValue, index, arr), thisValue)

const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

const HD = persons.map(getFullName);

function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}
console.log(HD);
//
// Yes, in JavaScript, the map method always returns a new array. The map method is used to create a new array by applying a provided function to each element of the original array. The function is applied to every element in the array, and the results are collected into a new array. It does not modify the original array.
