// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.
// const isEmpty = (obj) => {
//     return Object.keys(obj).length === 0;
// };

let emptyArrary = [];
let nonEmptyArray = [1,2,3];

console.log(isEmpty(nonEmptyArray));

// <Key notes>
// Object.keys(obj)
// This method returns an array of an object's own enumerable property names.
//  For example, if `obj` is `{ a: 1, b: 2 }`, `Object.keys(obj)` will return `['a', 'b']`

