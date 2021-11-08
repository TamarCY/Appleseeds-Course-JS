

function score(a){
    if (a < 65){
        return "F";
    }
    if (a < 70){
        return "D";
    }
    if (a < 80){
        return "C";
    }
    if (a < 90){
        return "B";
    }
    else{
        return "A";
    }
}

let my_score = score(25);
console.log(my_score);