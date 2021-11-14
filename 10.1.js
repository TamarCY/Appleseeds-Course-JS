const logString = str => console.log(str);

const isString = (str, func) => {
    if (typeof str == "string") {
        func(str);
    }
}

// isString("bla bla bla", logString)

const creatDashes = (str) => str.replaceAll(' ' , '/');

const firstWordUpperCase = (str, func) => func(str.charAt(0).toUpperCase() + str.slice(1))

// console.log(firstWordUpperCase("this is me",creatDashes));

const addQuestionMark = (str) => str + "?"

console.log(firstWordUpperCase("this is me",addQuestionMark))

const consoleStar = (n) => console.log (`look! ${n} stars`)

const testCallback = (arr, func) => {
    return func(arr.length)
}

testCallback([1,1,1], consoleStar);