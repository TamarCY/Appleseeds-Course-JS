const boomboom = (n) => {
    for (let i = 1; i <= n; i++){
        if (i%7 === 0){
            let nArr = Array.from(String(i));
            if (nArr.includes('7')){
                console.log("Boom-Boom");
            }
            else{
                console.log("Boom")
            }
        }
        else{
            console.log(i);
        }
        
        
    }
}

boomboom(18);


