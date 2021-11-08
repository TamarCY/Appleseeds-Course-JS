const days=["Sunday", "Monday", "Tusday", "Wednsday","Thursday","Friday","Saterday"];
const month =["January", "February", "March", "April", "May", "June", "July", "August" ,"September" ,"October" ,"November" ,"December"]
let ToDay=()=>{
    let myDate = new Date();
    let day = days[myDate.getDay()];
    let monthDay = myDate.getDate();
    let year = myDate.getFullYear();
    let myMonth = month[myDate.getMonth()];
    
    let answ="Today is " + day + " the " + monthDay + " of " + myMonth + ", " + year;
    return answ;
    console.log(answ);
}
ToDay();




