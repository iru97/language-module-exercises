const arr = [ 1, 'Iru', 76, true, 5];

const head = ([first]) => first;
// const tail = ([first, ...others]) => others;
const tail = ([, ...others]) => others;
const init = (arr) => arr.slice(0, -1);
// const last = (arr) => arr[arr.length - 1];
const last = (arr) => arr.slice(-1);

console.log(`Array that I am using: (${arr})`);
console.log(`Head: ${head(arr)}`);
console.log(`Tail: ${tail(arr)}`);
console.log(`Init: ${init(arr)}`);
console.log(`Last: ${last(arr)}`);
console.log(`Array after operations: (${arr})`);