// Create an object with a name property. The object should
// also have a method that prints its name, and another
// method that prints its name after a second with the help of
// setTimeOut. in this exercise, you are not allowed to use
// arrow functions.

const myObject = {
    name: "tamar",
    printName: function () {
        console.log(this.name)
    },
    printNameTimeOut (){

        setTimeout(this.printName.bind(this),2000)
                // setTimeout(this.printName,2000)

    }
}



myObject.printNameTimeOut();