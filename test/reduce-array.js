"use strict";

const oldArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const obj = {};

obj.array = oldArray;
obj.array2 = [
  { name: "john", email: "jsmith@xyz.com" },
  { name: "edward", email: "estevens@abc.com" },
  {
    name: "richard",
    email: "",
    mailingAddress: "123 Faker St, Nowheresville, AL, 82637",
  },
];

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(arrayWithDuplicates)];
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

const arrayWithDuplicates2 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray2 = arrayWithDuplicates2.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray2); // Output: [1, 2, 3, 4, 5]

// The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
// By combining it with includes(), we can efficiently accumulate unique values.

const array3 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray3 = array3.reduce((accumulator, currentValue) => {
  return accumulator.includes(currentValue)
    ? accumulator
    : [...accumulator, currentValue];
}, []);
console.log(uniqueArray3); // Output: [1, 2, 3, 4, 5]

//Pros: Offers a high degree of control and is highly readable. Suitable for more complex deduplication logic.
//Cons: Like the filter method, performance might lag with significantly large datasets.

// Try using Lodash for deep comparison

/*
Advanced Considerations
For arrays containing objects or nested arrays, these methods require adjustments, such as using a combination 
of map() and filter() or external libraries like Lodash, which offers utilities for deep comparison and unique value retrieval.
*/
