const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];

const countTheLetters = (arr) => {
    const str = arr.join("").toLowerCase();
    console.log(str);
    let obj = {};
    for (let char of str){
                if (char != " "){
                    obj[char] = 0;
                }                
        }
    for (char of str){
        if (char != " "){
        obj[char]++;
        }
    }
    return obj;
}

console.log(countTheLetters(array));
