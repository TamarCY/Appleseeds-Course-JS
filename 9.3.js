const food = ["Noodle", "Pasta", "Meat",
"Cucumber"];
const food1 = ["Fries", "Ice-cream", "Pizza", "olives",
"Hamburgers","olives"];

const compare2Arrays = (arr1, arr2) => {
    const ansArr = [];
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (arr1[i] == arr2[j]){
                 ansArr.push(arr1[i]);
                 break;
            }
        }
    }
    return ansArr.length === 0?
        false:
        ansArr;
}

console.log(compare2Arrays(food,food1));