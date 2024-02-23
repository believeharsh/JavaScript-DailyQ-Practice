// JavaScript For In Loop : 

// JavaScript for in loop is used to iterate over the properties of an object. JavaScript for in loop iterates only over those keys of an object which have their enumerable property set to “true”.

// The key values in an object have four attributes (value, writable, enumerable, and configurable).

// It can be a great debugging tool if we want to show the contents of an object.

// Important Points
// Use the for in loop to iterate over non-array objects. Even though we can use a for in loop for an array, it is generally not recommended. Instead, use a for loop for looping over an array.

// The properties iterated with the for in loop also include the properties of the objects higher in the Prototype chain.

// The order in which properties are iterated may not match the properties that are defined in the object.



const courses = {
    firstCourse: 'JavaScript',
    secondCourse: 'React',
    thirdCourse: 'Angular'
  };
  let value = '';
  
  //using for in loop 
  for (let item in courses) {
    value += courses[item] + ` `;
  }
  console.log(value);
  
  
  for ( let prop in courses){
    console.log(prop + " ---> " + courses[prop])
  }
