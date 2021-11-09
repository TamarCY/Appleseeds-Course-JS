const strLeng = arr => {
    let ans = [];
    for (let i = 0; i < arr.length; i++){
        ans[i] = arr[i].length;
    }
    return ans;
}

myArr = ["boo", "doooo", "hoo", "ro"]
strLeng(myArr);