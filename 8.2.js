const myCountry = {
    country: 'Israel',
    capital: 'Jerusalem',
    languege: 'Hebrew',
    population: 7,
    neighbours: ["palestain", "egypt", "lebanon"],
    describe(){
        console.log(
            `${this.country} has ${this.population} milion people, their mother tongue is ${this.languege}, they have ${this.neighbours.length} neighbouring coutries and the capital called ${this.capital}`
        )
        
    },
    checkIsland(){
        this.neighbours.length > 0 ? this.isIsland = true : this.isIsland = true;
    }
}

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland)

