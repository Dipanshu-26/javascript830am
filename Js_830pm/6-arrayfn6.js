//map, filter, reduce, forEach  ==> array methods
//some, every, find,findIndex 

//map 

let byear= [1999,2008,2017,1976,2025,1083,2020]

let age = byear.map(function(el){
    return 2026-el
}) 

console.log(age)

//--------------------------------------------------------

let marks = [34,56,78,90,21,11,45,69]

let passM = marks.filter(function(el){
    return el>=35
})

console.log(passM)

//failM

//--------------------------------------------------------

let nums = [34,56,78,90,21,11,45,69]

let total = nums.reduce(function(acc,el){
    return acc+el
},0)

console.log(total)

//--------------------------------------------------------

let names = ['raj','ravi','amit','seeta','geeta']

names.forEach(function(el){
    console.log(`Hello ${el}... How are you?`)
})