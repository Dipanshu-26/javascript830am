//find age if birth year is given (map)
let birthyear = [2020,2021,2025,1983,1999,2000]
let age = []

// for(let i=0;i<birthyear.length;i++){
//     age.push(2026-birthyear[i])
// }
// console.log(age)

//with map--------------------------------------
// map(function(el, index, arr)
// action => performs an operation on each element of the array
// return => new array with modified values

let age2=birthyear.map(function(el,index,arr){
    return 2026-el                    //2026-2020, 2026-2021, 2026-2025.....
})
console.log(age2)

//square
let numbers = [1,2,3,4,5,6,7]
let sq = numbers.map(function(el,idx){
    return el*el
})
console.log(sq)
//-------------------------------------------------

//find marks above 40 (filter)

// filter(function(el, index, arr)
// action => filters elements based on a condition (true/false)
// return => new array with matching elements

let marks = [45,89,23,76,90,11,43,22,32]
// let above40 = []
// for(let i=0;i<marks.length;i++){
//     if(marks[i]>40){
//         above40.push(marks[i])
//     }
// }
// console.log(above40)

//with filter----------------------------
let marksAbove40 = marks.filter(function(el,index,arr){
    return el>40
})
console.log(marksAbove40)

let below40 = marks.filter(function(el){
    return el <=40
})
console.log(below40)
// //below 40 find

// let below40 = []

// for(let i=0;i<marks.length;i++){
//     if(marks[i]<=40){
//         below40.push(marks[i])
//     }
// }
// console.log(below40)
//------------------------------------------------------------------------

//find addition of all elements of array (reduce)

let num = [44,6,7,22,89,11,56,89]
// let total = 0
// for(let i=0;i<numbers.length;i++){
//     total=total+numbers[i]               //0+44 ==> 44 +6 ==>50+7 ==>57 +22.....
// }
// console.log(total)

//with reduce------------------------------------------------------
// reduce(function(acc, el, index, arr), initialValue)
// acc => accumulator (acts as a temporary variable)
// action => reduces all elements to a single value
// return => single value (number / string / object)
let sum = num.reduce(function(acc,el,index,arr){
            return acc+el         //0+44==>44+6==>50+7==>57+22........
},0)

console.log(sum)

//multiplication
let mult = num.reduce(function(acc,el){
    return acc *el
},1)
console.log(mult)
//------------------------------------------------------------------------
// //want to print welcome to cityname Welcome to Pune!!!! (forEach)

// let city =['pune','mumbai','nagpur','nashik']

// for(let i=0;i<city.length;i++){
//     console.log(`Welcome to ${city[i]}!!!!`)
// }

// forEach(function(el, index, arr))
// action => performs an operation on each element of the array
// return => undefined (does NOT create new array)
let city =['pune','mumbai','nagpur','nashik']

city.forEach(function(el,index,arr){
    console.log(`Welcome to ${el}!!!!`)
})
