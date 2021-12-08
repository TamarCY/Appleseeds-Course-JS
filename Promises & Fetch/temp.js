const getIDs = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([532, 543, 753, 1, 5]);

        }, 1000);
    });


const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (ID) => {
                const recipe = {
                    title: "Fresh tomato pasta",
                    publisher: "Pinchas Hodadad",
                };
                resolve(`${ID}: ${recipe.title}`);// also works with recipeID instad id in this line
            },
            1500,
            recipeID // why cant we use as a parameter in the anonymus func insted of ID
        );
    });
};

// Calling the promise with .then ()

getIDs()  //returns [532, 543, 753, 1, 5]
    .then((IDs) => {  //gets [532, 543, 753, 1, 5]
        console.log(IDs);  //log ...
        return getRecipe(IDs[2]);  // gets 753 
                                    // returns "753: fresh tomato pasta"
    })
    .then((recipe) => {   //gets "753: fresh tomato pasta"
        console.log(recipe);  //log "753: f...
    })
    .catch((error) => {
        console.log("It is an error!");
    });

// Calling the promise with async + await

const getAsyncId = async () => {
    try {
        const response = await getIDs();
        const data = await getRecipe(response[1]);
        console.log(data)
    }
    catch (e) {
        console.log("It is an error!");
    }
}

getAsyncId()


// 27.2
// const newPromise = (array) => { 
//    return  new Promise ((resolve, reject) => {
//         array.forEach(element => {
//              typeof element === "string"?  resolve (array): reject (array)
//         });
//     })
// }

// const makeAllCaps = (array) => {
   
//      const result = array.map(element => element.toUpperCase());
//      console.log (result);
//      return result;
// }



// const sortWords = (array) => {
//     return array.sort()
// }


// const arrayOfWords = ["hello","I", "am", "an", "array"]


// newPromise(arrayOfWords).then((chckedArray)=> (makeAllCaps(chckedArray)))
// .then((capitalizedArray)=> sortWords(capitalizedArray))
// .then((result)=>(console.log(result)))





// makeAllCaps(arrayOfWords)



//27.1
// const myPromise = (number) => {
//     return new Promise ((resolve, reject) => {
//         if (number > 10){
//             resolve ()
//         } else {
//             if (number < 10){
//                 reject ()
//             }
//         }
//     }
//     )
// }
//  ;

// myPromise(12).then(() => (console.log ("I am resolved")))
//     .catch (()=>(console.log ("rejected")))