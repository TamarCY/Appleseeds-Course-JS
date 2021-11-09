let arr = [];
const obj = {name: "object", age: 100}
let fillArr = new Array(100).fill(obj);

const newArr = Array.from({length: 100}, (v, i) => i+1);

const arrObjVal = Object.values(obj);

const arr2 = [["name", "tamar"],["age",37]];
const objFromArr = Object.fromEntries(arr2);

const str = "I am not an array"
console.log(Array.isArray(str));
console.log(Array.isArray(arr2))
;


const arr3 = [1, 2, 3];
const arr4 = arr3;
console.log(arr4);
console.log(arr3);

const arr5 = arr3.map(x=>x);
console.log(arr5);

