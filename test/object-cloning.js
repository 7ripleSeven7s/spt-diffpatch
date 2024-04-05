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

console.table({
  obj1,
  obj2,
  obj3,
  obj4,
});

const objects = [obj1, obj2, obj3, obj4];

/* ***  for..in  ***

 for (const left in right)
  Left -> index
  Right -> Array/Iterable
  Accessor -> right[left] = ...

 */

/* for (const index in objects) {
  console.log("arrayItem", index, "= ", objects[index]);
} */

const arrayClone = [...objects];
console.log(arrayClone);
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
