function describeCountry(country,population,capitalCity){
return (country+" has " +(population/1000000) + " milion people and its capital city is "+ capitalCity)
};

let x =describeCountry('israel',7000000,'tel-aviv');

console.log(x);