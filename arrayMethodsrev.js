//map, filter, reduce, forEach
//some, every,find findIndex

//find age from birthyear
//                0   1     2    3   4
let birthYear = [2008,1983,2006,1987,2017]     //5
// let age=[]
// console.log(birthYear.length)
// for(let i=0 ; i<birthYear.length ; i++){
//     //console.log(birthYear[i])
//     age.push(2026 - birthYear[i])
// }
// console.log(age)


// map(function(el, index, arr)
// action =>
//  performs an operation on each element of the array
// return => new array with modified values

let age2 = birthYear.map(function(el,index,arr){
    return 2026-el
})
console.log(age2)


//----------------------------------------------------
let marks = [22,56,78,90,76,55,23,89]
// let above40=[]

// for(let i=0;i<marks.length;i++){
//     if(marks[i]>40){
//         above40.push(marks[i])
//     }
// }

// console.log(above40)

// filter(function(el, index, arr)
// action => filters elements based on a condition (true/false)
// return => new array with matching elements

let above40 = marks.filter(function(el){
    return el>40
})

console.log(above40)

let below40 = marks.filter(function(el){
    return el<40
})

console.log(below40)

//-----------------------------------------------------------------

marks = [22,56,78,90,76,55,23,89]
// let total = 0
// for(let i =0;i<marks.length;i++){
//     total = total+marks[i]              //0+22 ==>22+56 ==>78+78.....
// }
// console.log(total)


// reduce(function(acc, el, index, arr), initialValue)
// acc => accumulator (acts as a temporary variable)
// action => reduces all elements to a single value
// return => single value (number / string / object)

let sum = marks.reduce(function(acc,el){
    return acc+el
},0)

console.log(sum)

let multiply = marks.reduce(function(acc,el){
    return acc*el
},1)
console.log(multiply)

//-----------------------------------------------------------------

// forEach(function(el, index, arr))
// action => performs an operation on each element of the array
// return => undefined (does NOT create new array)

// //want to print welcome to cityname Welcome to Pune!!!!-----------------------
let city=['pune','nagpur','banglore','mumbai']

// for(let i=0;i<city.length;i++){
//     console.log(`Welcom to ${city[i]} !!!`)
// }

city.forEach(function(el){
    console.log(`Welcome to ${el} !!!`)
})

//--------------------------------------------------------------------

// some()
// some(function(el, index, arr)
// action => checks if at least one element satisfies the condition
// return => true if any element matches, otherwise false

// find atleast one element is > 70
let arr = [22,54,11,78,64,79,23]

let res1 = arr.some(function(el){
    return el>70
})
console.log(res1)

let agencies =["LIC","HDFC","kotak","icici"]

let res2 = agencies.some(function(el){
    return el == "bajaj"
})
console.log(res2)

//-------------------------------------------------------
// every()
// every(function(el, index, arr)
// action => checks if all elements satisfy the condition
// return => true if all elements match, otherwise false

// find every  element is > 70
let arr2 = [22,54,11,78,64,79,23]
let res3 = arr2.every(function(el,indx,arr){
    return el>7
})
console.log(res3)

//-------------------------------------------------------
// find()
// find(function(el, index, arr)
// action => finds the first element that satisfies the condition
// return => element (if not found, returns undefined)

let arr3 = [78,76,89,11,45,22,11,90,45,22,78]
let res4 = arr3.find(function(el){
    return el >10
})
console.log(res4)

//-------------------------------------------------------
// findIndex()
// findIndex(function(el, index, arr)
// action => finds the index of the first element that satisfies the condition
// return => index (if not found, returns -1)

let res5 = arr3.findIndex(function(el){
    return el >10
})
console.log(res5)