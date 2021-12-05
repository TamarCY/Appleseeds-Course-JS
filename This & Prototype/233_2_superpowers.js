const storm = {
    superPower: "flying",
    func: printSuperPower
   }
   function printSuperPower() {
    console.log("my superpower is " + this.superPower);
   }

   storm.func();

   const storm2 = {
    superPower: "flying",
    printSuperPower
   }
   function printSuperPower() {
    console.log("my superpower is " + this.superPower);
   }

   storm2.printSuperPower();