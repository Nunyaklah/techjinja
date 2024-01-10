// What is the this Keyword ?

/*
Ans : In JavaScript, the this keyword is a reference to 
the current execution context, which is determined by how a 
function is called. The value of this is not fixed; it depends 
on the invocation context of the function.

*/

// Global Context

console.log(this);

// Function Context

function exampleFunction() {
  console.log(this);
}

exampleFunction();

// Method Invocation

const student = {
  name: "John",
  age: 18,
  getName: function () {
    console.log(this.name);
  },
};

student.getName();

const studentTwo = {
  name: "Frank",
  age: 20,
  getName: function () {
    console.log(this.name);
  },
};

let getName = studentTwo.getName;

let studentThree = { name: "Messi", age: 23, getName };
studentThree.getName();

// Constructor Invocation
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    console.log(this.name);
  }
}

const studentFour = new Student("Kofi", 20);
const studentFive = new Student("Jake Paul", 29);
studentFour.getName();
studentFive.getName()


// Arrow Functions
/* 
Arrow functions do not have their own this context. 
Instead, they inherit the this value from the enclosing scope.

In an arrow function, the value of this is lexically scoped

*/
const exampleArrowFunction = () => console.log(this)
exampleArrowFunction()

const person = {
  firstName: "John",
  lastName: "Doe",
  
  // Regular function as a method
  regularMethod: function() {
    console.log("Regular Method:", this.firstName, this.lastName);
  },

  // Arrow function as a method
  arrowMethod: () => {
    console.log("Arrow Method:", this.firstName, this.lastName);
  },
};

person.regularMethod();  // Regular Method: John Doe

// Since arrow functions don't bind their own 'this', 'this' in arrowMethod refers to the global object
person.arrowMethod();    // Arrow Method: undefined undefined



