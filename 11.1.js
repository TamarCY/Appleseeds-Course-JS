//loop with for each and return array of object with id and name

const movieIdAndName = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = undefined;
        result.push({ id: arr[i].id, name: arr[i].title })
    }
    arr.forEach(movie => {
        result.push({ id: movie.id, name: movie.title })
    })
    return result;

}

const getDataFomeObj = (obj) => {
    return { id: obj.id, name: obj.title }
}

const movieIdAndNameMap = (arr) => {
    return arr.map((movie) => {
        return { id: movie.id, name: movie.title };
    });
}

const movieIdAndNameMap = (arr) => {
    return arr.map(getDataFomeObj)
}

// TODO: can i do it without call back?
// const test = (arr) => {
//     let ans = [];
//     ans = arr.map(e => {id: e.id, name: e.title )
// }

const newReleases = [
    {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 1,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
    },
];

console.log(movieIdAndNameMap(newReleases));