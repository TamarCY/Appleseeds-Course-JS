let isLeap = (year) =>{
    if (year % 400 === 0){
        return "It is indeed leap year"
    }
    else if ((year % 4 === 0) & (year % 100 !== 0)){
        return "It is indeed leap year"

    }
    else {
        return "This is not a leap year";
    }
}

isLeap(2100)
