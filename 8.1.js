 const bookObj = {
     name: "trofoti",
     auther: "julia donaldson",
     painter: "exal shefler"
 }

 const printBookInfo = book => `The book ${book.name} was writen by ${book.auther} and painted by ${book.painter}`
 console.log(printBookInfo(bookObj));