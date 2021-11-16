const foods = ["falafel", "sabich", "hummus", "pizza with extrapineapple"];

let sorted = foods.slice().sort();

// TODO: is there a way to do this without reverse()?
let desndingSorted = foods.slice().sort().reverse();

console.log(sorted);

// console.log(desndingSorted);

// console.log(foods);


const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
   ];

let sorted1 = foodsWithUpperCase.slice().sort((a,b)=>  a.toLowerCase() === b.toLowerCase()? 0: a.toLowerCase() > b.toLowerCase()? 1 : -1);


console.log(sorted1);


let sorted2 = foodsWithUpperCase.slice().sort((a,b)=>  a.toLowerCase() === b.toLowerCase()? 0: a.toLowerCase() > b.toLowerCase()? -1 : 1);

console.log(sorted2);


const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];

let longest = words.slice().sort((a,b) => (
    a.length === b.length? 0:
    a.length > b.length? 1:
    -1));

let longest2 = words.slice().sort((a,b) => {
    return (
        a.length === b.length? 0:
        a.length > b.length? 1:
        -1)});

console.log(longest2)


