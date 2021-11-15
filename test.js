
// function isString(string, (params) =>   {
//     return typeof str === 'string'}) {
//       return func(string);
//   }


const makeBetweenFunc = (n1, n2) => {
    return function (age) {
        return (age > n1 && age < n2);
    }
}
const isChild = makeBetweenFunc(0,18);


console.log(isChild(20));

