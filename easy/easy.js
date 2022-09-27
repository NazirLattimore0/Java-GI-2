// create an array of 3 students with last name, first name and age
var student1 = {
  lastName: "Doe",
  firstName: "John",
  age: 19,
};
var student2 = {
  lastName: "Lattimore",
  firstName: "Nazir",
  age: 19,
};
var student3 = {
  lastName: "James",
  firstName: "Lebron",
  age: 37,
};
const students = [student1, student2, student3];

// loop through the array and print out the students' full name and age
// output: "Hello, my name is John Doe and I am 20 years old"

console.log(
  "Hello, my name is " +
    student1.firstName +
    " " +
    student1.lastName +
    " and I am " +
    student1.age +
    " years old"
);
