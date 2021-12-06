
// 1. What is wrong with the code? explain in your own words
// 2. Fix the code so that invoking the whoIsStronger function
// will print "I am stronger".
// note: you cannot change the 'hero' or the whoIsStronger
// function.

const hero = {
    health: 5,
    power: 68,
    getStrength: function () {
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    }
}
function whoIsStronger(getStrength) {
    const myStrength = 82;
    if (getStrength() < myStrength) {
        console.log ( "I am stronger");
    } else console.log("You are stronger");
}
whoIsStronger(hero.getStrength.bind(hero));

// GetStrength in  called in line 20. but it's "this" refers to the window object
// in order for it to refer to the hero object we need to bind it when we call the function 

