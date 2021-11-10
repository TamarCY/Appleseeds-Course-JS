const bookObj1 = {
    name: "no lions like this",
    author: "ami rubinger",
    year: 2010
};

const bookObj2 = {
    name: "hichhike on a broom",
    author: "julia donaldson",
    year: 2005
};

// const bookUtils = {};

const bookUtils = {
    getFirstPublished (book1, book2){
            const smaller = book1.year < book2.year? book1: book2;
            console.log (`${smaller.name} was published first`);
    },
    setNewEdition (book, editionYear){
        book.editionYear = editionYear;
    },
    setLanguage (book, lang){
        book.laguege = lang;
    },
    setPuplisher (book, name, location){
        // book.publisher = {"name": name, "location":location}
        book.publisher = {name, location}

    },
    isSamePublisher (book1, book2){
        return book1.publisher.name === book2.publisher.name? true : false
    }
};


bookUtils.getFirstPublished(bookObj1, bookObj2);
bookUtils.setNewEdition(bookObj1, 2020);
console.log(bookObj1);
bookUtils.setNewEdition(bookObj1, 2021);
bookUtils.setLanguage(bookObj2, "english")
bookUtils.setPuplisher(bookObj2, "zbm", "lod");
bookUtils.setPuplisher(bookObj1, "zbm", "lod");
console.log(bookObj2);
console.log(bookUtils.isSamePublisher(bookObj2, bookObj1));

