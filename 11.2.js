const doubleValues = arr => arr.map(x => x*2)

// console.log(doubleValues([1,2,3,4]))

const onlyEvenValues = (arr) => {
    let evenArr = [];
    arr.forEach(element => {
        if (element % 2 === 0){
            evenArr.push(element)
        }
        
    });
    return evenArr;
} 


// TODO: can this be done using map?
// console.log(onlyEvenValues([1,2,3,4]));



const showFirstAndLast = (arr) => {
    let ans = [];
    arr.forEach(element => { if (typeof(element) === "string"){
        let x;
        x = element.length === 1? 
            element:
            element[0]+element[(element.length)-1];
        ans.push(x);
        }
    }
    )
     
    return ans; 
    }


let array = [1, 'abc', 'ab', 5, 'abcd', 'a'];

console.log(showFirstAndLast(array));

// const vowelCount = (str) => {
//     str.toLowerCase().forEach( char => {
//         if (char === 'a' ֿ)
//     }
//     )
// }

const capitalize = str => {
    let arr = str.split("");
    let ansStr = arr.map(char => char.toUpperCase()).join("");
    return ansStr
}

console.log(capitalize('tamar'))

const shiftLetters = (str) => {
    let arr = str.split("");
    let temp = arr.map(char => char.charCodeAt()-1);
    let ans = temp.map(n => String.fromCharCode(n));
    return ans.join("");
    
}

   
//every other word is capitalized.
const swapCase = str => {
   let arr = str.split(" ");
   let ans = arr.map((word, index) => index % 2 == 0? capitalize(word) : word ) 
    return ans.join(" ");
}

console.log(swapCase("this is a test"))