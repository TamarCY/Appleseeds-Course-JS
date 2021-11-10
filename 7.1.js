 const myFunc = arr => {
     for ( let i = 0; i < arr.length; i++){
        let currentNum = arr[i];
        let currNumNextIndex = arr.indexOf(currentNum, i+1); 

        console.log(`current num is ${currentNum} currNumNextIndex is ${currNumNextIndex}`);
        currNumNextIndex != -1? console.log("yes"): console.log("no");
        while (currNumNextIndex != -1){
            arr.splice[currNumNextIndex,1]
            currNumNextIndex = arr.indexOf(currentNum, i+1); 
            console.log(arr)

         }     
     }
     console.log(arr)
     return arr;
 }


 myArr = [3,4,4,3,6,3];
 myFunc(myArr);

