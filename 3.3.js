function percentageOfWorld1(population){
    let worldPopulation = 7900;
    let ans = population / worldPopulation * 100;
    return ans;
}

let china = percentageOfWorld1(1441);
let israel = percentageOfWorld1 (7);
let denemark = percentageOfWorld1 (8);

console.log( china, israel, denemark)

