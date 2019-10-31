const arrA = [ 1, 2, 3, 4];
const arrB = [ 5, 6, 7, 8];
const arrC = [ 'a', 'b', 'c', 'd'];
const arrD = [ 9, 10, 11, 12];

const concat = (a, b) => [...a, ...b];
const concatV2 = (...arrays) => arrays;

console.log(`Arrays that I am using - A: (${arrA}) B: (${arrB}) C: (${arrC}) D: (${arrD})`);
console.log(`Concat: ${concat(arrA, arrB)}`);
console.log(`ConcatV2: ${concatV2(arrA, arrB, arrC, arrD)}`);
console.log(`Array after operations - A: (${arrA}) B: (${arrB}) C: (${arrC}) D: (${arrD})`);