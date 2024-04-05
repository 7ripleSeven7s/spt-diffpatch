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

console.table({
  obj1,
  obj2,
  obj3,
  obj4,
});

const propNames = [];
const propVals = [];

const objects = [obj1, obj2, obj3, obj4];
for (const key in objects) {
  console.log("key = ", key);

  if (!propNames.includes(key)) {
    propNames.push(key);
  }
}

if (obj3.age !== undefined) {
  console.log(obj3.name, " has age of: " + obj3.age);
}

/*  'abcdefghijklmnopqrstuvwxyz'
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'  */

/* 
┌─────────┬────────┬─────┬────────┐
│ (index) │ name   │ age │ degree │
├─────────┼────────┼─────┼────────┤
│ obj1    │ 'John' │ 23  │ 'CS'   │
│ obj2    │        │ 23  │ 'CS'   │
│ obj3    │ 'Max'  │ 23  │ 'CS'   │
│ obj4    │ 'John' │ 23  │ 'CS'   │
└─────────┴────────┴─────┴────────┘
 */
