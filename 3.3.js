function percentageOfWorld1(population){
    let worldPopulation = 7900;
    let ans = population / worldPopulation * 100;
    return ans;
}

let china = percentageOfWorld1(1441);
let israel = percentageOfWorld1 (7);
let denemark = percentageOfWorld1 (8);

console.log( china, israel, denemark)

const percentageOfWorld2 =(population) => population / 7900 * 100;

let china2 = percentageOfWorld2(1441);
let israel2 = percentageOfWorld2 (7);
let denemark2 = percentageOfWorld2 (8);
console.log( china2, israel2, denemark2)
