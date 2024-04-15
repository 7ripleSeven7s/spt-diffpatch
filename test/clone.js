"use strict";

/* Object keys & values */

const obj1 = {
  name: "John",
  age: 21,
  degree: "CS",
};
const obj2 = { name: "Robert", age: 43 };
const obj3 = { name: "Max", age: 23, degree: "CS" };
const obj4 = { name: "John", age: 27, degree: "IT" };

if (obj3.age !== undefined) {
  console.log(obj3.name, " has age of: " + obj3.age);
}
prompt("hello");

console.table({
  obj1,
  obj2,
  obj3,
  obj4,
});

const objects = [obj1, obj2, obj3, obj4];
let objCustom = {a:"hi",b:123};
/* ***  for..in  ***/

const student = {
  name: "John",
  age: 21,
  degree: "CS",
};

// Clone object using for..in loop
const student2 = {};
for (const key in student) {
  student2[key] = student[key];
  console.log(
    `${key}: ${student[key]}, ${student2[key]}, ===:${
      student[key] === student2[key]
    }, Object.is():${Object.is(student, student2)}`
  );
}

const student3 = [...student];
console.log(
  `object destructuring: '===':${student === student3}, 'Object.is():${Object.is(
    student,
    student3
  )}'`
);
/* 
  [
    { name: "John", age: 21, degree: "CS" },
    { name: "Robert", age: 43 },
    { name: "Max", age: 23, degree: "CS" },
    { name: "John", age: 27, degree: "IT" },
  ]; 
*/

const objClone = { ...objects };
console.log(objClone);
/* 
  {
    '0': { name: 'John', age: 21, degree: 'CS' },
    '1': { name: 'Robert', age: 43 },
    '2': { name: 'Max', age: 23, degree: 'CS' },
    '3': { name: 'John', age: 27, degree: 'IT' }
  }
 */

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const items = [{}, {}, [1, 2, 3]];
