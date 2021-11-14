const objKeyToVal = (obj) =>{
    const keyArr = Object.keys(obj);
    const valArr = Object.values(obj)
    const newObj = {};
    for (let i = 0; i < keyArr.length; i++){
        newObj[valArr[i]] = keyArr[i];
    }
    console.log(newObj)
};

const myObj = {a:1, b:2, c:3};
objKeyToVal(myObj);
