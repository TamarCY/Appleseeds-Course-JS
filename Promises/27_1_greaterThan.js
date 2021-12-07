const myPromise = (number) => {
    return new Promise ((resolve, reject) => {
        if (number > 10){
            resolve ()
        } else {
            if (number < 10){
                reject ()
            }
        }
    }
    )
}
 

myPromise(12).then(() => (console.log ("I am resolved")))
    .catch (()=>(console.log ("rejected")))