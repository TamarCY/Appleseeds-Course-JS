const john = ["john" ,89,120,103];
const mike = ["mike",116,94,123];
function basktball (a,b){
    avrA = (a[1] + a[3] + a[2])/3;
    // console.log ("avrage a =" $ {avrA} ")    // console.log ("avrage a =" $ {avrA} ")
    console.log ("avrage a = " +avrA);
    avrB = (b[3] + b[1] + b[2])/3;
    console.log ("avrage b = " +avrB);
    if (avrA > avrB){
        console.log (a[0] + " is the winner! his avrage score is " + avrA)}
        else{
            if (avrB > avrA){
                console.log (b[0] + " is the winner! his avrage score is " + avrB)}
            
            else{
                console.log ("its a tie! the avrage score is "  +avrA)
            }
        } 
    }

    basktball(john,mike);
