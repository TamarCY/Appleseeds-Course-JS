const arr = [1, 2, 3, 4, 5, 6]

let result = arr.reduce((max, n) => {
    return Math.max(max, n)
})


result = arr.reduce((max, n) => {
    return max > n ? max : n
})

// console.log (result)


let sumOfEven = arr.reduce((sum, n) =>
    n % 2 === 0 ?
        sum + n :
        sum

    , 0)


let avg = arr.reduce((res, n) => (res + n))/arr.length

console.log(avg)

let avg2 = arr.reduce((res, n) => (res + n/arr.length),0)

console.log(avg2)
