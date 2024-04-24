"use strict";

const obj1 = { name: "John", age: 21, degree: "CS" };
const obj2 = { name: "Robert", age: 43 };
const obj3 = { name: "Max", age: 23, degree: "CS" };
const obj4 = { name: "John", age: 27, degree: "IT" };

const objects = [obj1, obj2, obj3, obj4];
//console.table([...objects]);

const student = { name: "John", age: 21, degree: "CS" };
const student2 = {};

// Clone object using for..in loop
const weakClone = (tgt, src) => {
  let key = {};
};

// Clone via Object destructuring
const student3 = { ...student };
console.log(`object destructuring:`);
console.log(`===:${student === student3}`);
console.log(`Object.is():${Object.is(student, student3)}`);

// Object Array
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

// Mixed Object Arrays
const items = [{}, {}, [1, 2, 3]];
