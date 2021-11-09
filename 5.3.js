const validation = pass => pass.length > 7 ? "Strong" : "Weak";

const validation2 = pass => {
    if ( pass.length > 7){
        return "Strong";
    }
    else{
        return "Weak"
    }
}

const hasUpperCase = str =>  str.toLowerCase() != str;


const validation3 = pass => {
    if (pass.length > 7){
        if (hasUpperCase(pass)){
            return "Very Strong"
        }
        return "Strong"
    }
    return "Weak"
} 



const validation4 = pass => pass.length < 7 ?  "Weak" : (hasUpperCase(pass) ? "Very Strong" : "Strong")
    




console.log (`123465678A ${validation4('123465678A')}`)
console.log (`123465678 ${validation4('123465678')}`)
console.log (`123 ${validation4('123')}`)