"use strict";

import { Buffer } from "node:buffer";

const obj1 = {
  name: "John",
  age: 23,
  degree: "CS",
};
const obj2 = { age: 23, degree: "CS" };
const obj3 = { name: "Max", age: 23, degree: "CS" };
const obj4 = { name: "John", age: 23, degree: "CS" };

console.table({
  obj1,
  obj2,
  obj3,
  obj4,
});

const propNames = [];
const propVals = [];

const objects = [obj1, obj2, obj3, obj4];
for (const [k, v] in objects) {
  console.log(k);
  console.log(v);

  if (!propNames.includes(k)) {
    propNames.push(k);
  }
  if (!propVals.includes(v)) {
    propVals.push(v);
  }
}

if (obj2.age !== undefined) {
  console.log(obj2.name, " has age of: " + obj2.age);
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

const c = Uint8Array.from([4, 2, 0, 6, 9]);
console.log(c);

const buf = Buffer.allocUnsafe(1000);
console.log(buf);
