function Pokemon (pokemonName, pokemonType, pokemonAttackList) {
    this.pokemonName = pokemonName;
    this.pokemonType = pokemonType;
    this.pokemonAttackList = pokemonAttackList;
}

const pica = new Pokemon ("picachoo", "yellow", ["pi", "ca", "choo"])
const eve = new Pokemon ("eve", "broun", ["eee", "vvvv"])
const char = new Pokemon ("charmander", "orange", ["charrrr"])

Pokemon.prototype.callPokemon = function(){
    console.log(`I choose you, ${this.pokemonName}`)
}

pica.callPokemon();

eve.callPokemon();

Pokemon.prototype.attack = function (attackNumber){
    console.log (`${this.pokemonName} used ${this.pokemonAttackList[attackNumber]}`)
}

pica.attack(2)