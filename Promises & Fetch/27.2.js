
const newPromise = (array) => { 
    return  new Promise ((resolve, reject) => {
        // TODO: CHANGE the error and the foreach and the check- instad foreach for and return in the end
         array.forEach(element => {
              typeof element === "string"?  resolve (array): reject (array)
         });
     })
 }
 
 const makeAllCaps = (array) => {
    
      const result = array.map(element => element.toUpperCase());
      console.log (result);
      return result;
 }
 
 
 
 const sortWords = (array) => {
     return array.sort()
 }
 
 
 const arrayOfWords = ["hello","I", "am", "an", "array"]
 
 
 newPromise(arrayOfWords).then((chckedArray)=> (makeAllCaps(chckedArray)))
 .then((capitalizedArray)=> sortWords(capitalizedArray))
 .then((result)=>(console.log(result))).catch(()=>(console.log("error")))