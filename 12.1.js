let library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];

const canBeRead = (array) => {
    array.forEach(element => {
        if (element.readingStatus === true) {
            console.log(`The book ${element.title} by ${element.author} is available`)
        }
    });
}

canBeRead(library)