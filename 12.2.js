const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
   }

   function getCandy(candyStore, id){
        for(const item of candyStore.candies){
            if (item.id === id){
                return item;
            }
        }
    } 

    console.log(getCandy(candyStore,"5hd7y"))

    // TODO: why cant we do this?
    // const getPrice = (candyStore, id) => {
    //     candyStore.candies.forEach(element => {
    //         if (element.id === id){
    //             return element.price
    //         }
    //     });
    // }


    const getPrice = (candyStore, id) => {
        for( const item of candyStore.candies){
            if (item.id === id){
                return item.price
            }
        };
    }



    console.log(getPrice( candyStore, "5hd7y"))

    const addCandy = (candyStore, id, name, price) => {
        candyStore.candies.push({"name": name, "id":id, "price":price, "amount":1})
    }

    addCandy(candyStore, "a", "cool", 5);

    // function removeItem(candyStore, id){
    //     for(const item of candyStore.candies){
    //         if (item.id === id){
    //             item.amount--;
    //             return candyStore;
    //         }
    //     }
    // } 
    
    const buy = (candyStore, id) => {
        candyStore.cashRegister += getPrice(candyStore, id);
        for(const item of candyStore.candies){
            if (item.id === id){
                item.amount--;
                return candyStore;
            }
        }
    }

    console.log(candyStore)


    console.log(buy(candyStore, "as12f"))



