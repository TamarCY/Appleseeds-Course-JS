const countryToLiveIn = (language, isIsland, population, country) => {
    if (language === "English"
        && population < 50000000 
        && !isIsland){
            console.log (
               "you should live in " + country 
            ) 
            return true;
        }
        else {
            console.log (country + " does not meet your criteria")
            return false;
        }
}

countryToLiveIn('English', false, 2000000, "spain");
countryToLiveIn('English', false, 600000000, "israel");





