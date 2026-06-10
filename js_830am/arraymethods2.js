//map, filter, reduce, forEach, evey, some , find, findIndex 

let by = [2020,2013,2000,1999,1986,1983]
//age  map 

// map(function(el, index, arr)
// action => performs an operation on each element of the array
// return => new array with modified values

let age = by.map(function(el){
    return 2026-el
})
console.log(age)

//filter 

let marks = [78,61,14,34,99,11,45]

let above35 = marks.filter(function(el,idx,arr){
    return el>=35
})
console.log(above35)


let below35 = marks.filter(function(el,idx,arr){
    return el<35
})
console.log(below35)

// reduce
marks = [78,61,14,34,99,11,45]

let total = 0
for(let i=0;i<marks.length;i++){
    total = total+marks[i]             //0+78 ==>78+61==>139 +14
}
console.log(total)

//using reduce

let sum = marks.reduce(function(acc,el,idx,arr){
    return acc+el
},0)
console.log(sum)

//multiplication
// total = 1
// for(let i=0;i<marks.length;i++){
//     total = total*marks[i]             //0+78 ==>78+61==>139 +14
// }
// console.log(total)

let mul = marks.reduce(function(acc,el,idx,arr){
    return acc*el
},1)
console.log(mul)


//forEach ==>for 
let names = ["dipanshu","neel","tanish","nitin"]

names.forEach(function(el,inx,arr){
    console.log(`Welcome to id = ${inx} and name = ${el}!!!`)
})

 //evey, some , find, findIndex