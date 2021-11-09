const people = ["greg", "mery","devon", "james"];

const peopleFunc = arr => {

for(let i of arr){
     console.log(arr[i]);
 }

 arr.shift();
 console.log(arr);

 arr.pop();
 console.log(arr);
}

arr.unshift("matt");
console.log(arr);

arr.push("tamar");
console.log(arr);
 
for (let j of arr){
    console.log (arr[j]);
    if (arr[j] === "mary"){
        break;
    } 
}


console.log(`Just tamar and devon ${arr.slice(2)}`)

for (let k of arr){
    if (arr[k] === "mary"){
        return k;
    }
}

for (let l of arr){
    let x = -1;
    if (arr[l] === "foo"){
        x = l;
    }
    return x;
}

const people2 = ["greg", "mery","devon", "james"];

people2.splice(2,2,"liz","artie");
console.log(people2);

const withBob = people2.concat(["bob"]);
console.log(withBob);