
// What is wrong with this code?
//  1. First find the line that contains the problem. Write it down.
//      The debugger said:
//      Uncaught TypeError: Cannot read property 'length' of undefined
//      Uncaught TypeError: Assignment to constant variable.



// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.

// 4. Fix the code and submit it all.



function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
}
getSum([1, 2, 3], [5, 66, 23]);


// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
//      findSmalest(52,66, 2);

// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.

// function findSmallest(a, b, c){
//     if (a > b && b > c){
//     return c;
//     } else if (a > c > b) {
//     return a;
//    } else {
//     return b;
//     }
//    }
//    findSmallest(52,66, 2);


function getSumOfEven(arr) {
    return (arr[2] + arr[4] + arr[6] + arr[8] + arr[9]);
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// Sum is NaN

function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter ++;
        }
    }
    return counter;
}
// console.log(countOccurrences("ini mini miny moe", "n"));




   