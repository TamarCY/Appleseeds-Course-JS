const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
   ]


   const getNames = (arr) =>  arr.map( el => el.name);

//    console.log (getNames(data))

   const findBirthYear = (str) => {
       let yearStr = str.slice(str.length - 4);
       return parseInt(yearStr);
         


   }

//    const before1900 = (arr) => {
//         return arr.map(element => {return (element.year = findBirthYear(element.birthday))})
//    }

//    before1900(data)

const before1900 = (arr) => {
    let newArr =[]; 
    for (let element of arr){
        if (findBirthYear(element.birthday) < 1990){
            newArr.push(element)
        }
    }
    return newArr;
}

// console.log(data[0].favoriteFoods.meats)
// console.log(before1900(data))

const creatFoodArr = (arr) => {
    let foodArray=[];
    for (let element of arr){
        foodArray.push( ...element.favoriteFoods.meats);
        foodArray.push( ...element.favoriteFoods.fish);
    }
    return foodArray
}

// creatFoodArr(data)

const creatIndex = (array) => {
    const obj = {};
    array.forEach(element => {
         obj.hasOwnProperty(element)? obj[element]++ : obj[element]=1; 
    });
    // console.log(obj)
    return obj;

}


const creatFoodObj = (arr) => {
    let foodArr = creatFoodArr(arr);
    return creatIndex (foodArr);
}

console.log(creatFoodObj(data));