const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];

const countTheLetters = (arr) => {
    const str = arr.join(" ").toLowerCase();
    console.log(str);
    let obj = {a:0};
    for (let char of str){
                obj[char] = 0;
        }
    for (char of str){
        obj[char]++;
    }
    return obj;
}

console.log(countTheLetters(array));
