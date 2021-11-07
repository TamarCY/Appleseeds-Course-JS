function tellFortune(jobTitle, location, partnerName, numberOfChildren){
    return("You will be a " +jobTitle+  " in " + location +  " and married to "+
    partnerName + " with " + numberOfChildren + " children.")
    
}


let tellFortune2 =(jobTitle, location, partnerName, numberOfChildren)=>(
    ("You will be a " +jobTitle+  " in " + location +  " and married to "+
    partnerName + " with " + numberOfChildren + " children."))
console.log(tellFortune2('dietitian','tel-aviv','inbar',3));


