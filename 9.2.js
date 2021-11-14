// Recreate the challenge from the exercise 6.3-
// looping_with_arrays ,but this time using a while loop.
// 2. Reflect on what solution you like better for this task: the
// for loop or the while loop?

const strLeng = arr => {
    let ans = [];
    for (let i = 0; i < arr.length; i++){
        ans[i] = arr[i].length;
    }
    return ans;
}

const strLengWithWhile = (arr) => {
    let ans = [];
    let i = 0;
    while ( i < arr.length){
        ans[i] = arr[i].length;
        i++;
    }
    return ans;
}

myArr = ["boo", "doooo", "hoo", "ro"]
console.log(strLeng(myArr));
console.log(strLengWithWhile(myArr));

//I prefer the for loop beacause the index is built in 
