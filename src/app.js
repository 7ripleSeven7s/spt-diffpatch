"use strict";

import { isDeepStrictEqual } from "util";

// *** Imports ***

/**
 * @param {Object} obj1
 * @param {Object} obj2
 *
 * @return { Object }
 */
function compare(obj1, obj2) {
  for (let index in obj2) {
    console.log(index, ":", obj1[index], ", ", obj2[index]);
    if (!isDeepStrictEqual(obj2[index], obj1[index])) {
      return false;
    }
  }
  return true;
}

function compStringify(obj1, obj2) {
  const s1 = JSON.stringify(obj1);
  const s2 = JSON.stringify(obj2);

  return s1 === s2;
}

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const products2 = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const products3 = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Carrot", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const o1 = [
  { name: "John", active: false },
  { name: "Dave", active: true },
  { name: "Eric", active: true },
];
const o2 = [
  { name: "Dave", active: true },
  { name: "John", active: false },
  { name: "Eric", active: true },
];

console.log(compare(products, products2));
console.log(compare(products, products3));
console.log();
console.log(compare(o1, o2));
o1.sort()

/* console.log(compStringify(products, products2));
console.log(compStringify(products, products3)); */
