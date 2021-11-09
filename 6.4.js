
const percentageOfWorld =(population) => population / 7900 * 100;

const p = (x) => console.log(x);

const poulation = [5,10,4,50]
const populationPercentages = arr => {
    const precentages = [];
    for (let i = 0; i < arr.length; i++){
        precentages[i] = percentageOfWorld (arr[i]);
    }
    return precentages;
}

populationPercentages(poulation);
p("Hiiiiiii");