const printArr = arr => {
    for (let i = 0; i < arr.length; i ++){
        console.log(arr[i]);
    }
}

const arrayLength = arr => {
    let length = 0;
    for (let i of arr){
        length ++;
    }
    return length;
}

const arrSum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

const arrSum2 = arr => {
    let sum = 0;
    for(let i of arr){
        sum += arr[i];
    }
    return sum;
}

const arrayMulti = arr => {
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++){
        ans *= arr[i];
    }
    return ans
}

const arr = [1,2,3];
printArr(arr);
arrayLength(arr);
arrSum(arr);
arrSum2(arr);
arrayMulti(arr);