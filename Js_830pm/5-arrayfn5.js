
//map
// map(function(el, index, arr)
// action => performs an operation on each element of the array
// return => new array with modified values

let byear = [1990, 1994, 2000, 2005, 2008, 2024]
let age = []
for (let i = 0; i < byear.length; i++) {
    age.push(2026 - byear[i])
}
console.log(age)
//---------------------------------------------
let age2 = byear.map(function (el, index, arr) {
    return 2026 - el
})
console.log(age2)

//---------------------------------------------

//filter()
// filter(function(el, index, arr)
// action => filters elements based on a condition (true/false)
// return => new array with matching elements

let marks = [78, 45, 33, 18, 3, 99, 76, 34, 74]
let passM = []
for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 35) {
        passM.push(marks[i])
    }
}
console.log(passM)


let failM = []
for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
       failM.push(marks[i])
    }
}
console.log(failM)

//---------------------------------------------------------
let passM2 = marks.filter(function(el){
    return el>=35
})
console.log(passM2)

let failM2 = marks.filter(function(el){
    return el<35
})
console.log(failM2)

//---------------------------------------------------------

// reduce(function(acc, el, index, arr), initialValue)
// acc => accumulator (acts as a temporary variable)
// action => reduces all elements to a single value
// return => single value (number / string / object)
let nums = [11,22,33,44,55,66,77,88]
let total=0
for(let a=0;a<nums.length;a++){   //a++ ==> a=a+1
    total+=nums[a]               //  total+=nums[a] ==> total = total+nums[a]
 }
// 0+11 =11(total == acc)
// 11+22 =33
// 33+44=77
// 77+55..
 console.log(total)
//-----------------------------------------------------------
let sum = nums.reduce(function(acc,el){
    return acc+el
},0)
console.log(sum)
//--------------------------------------------

// forEach(function(el, index, arr))
// action => performs an operation on each element of the array
// return => undefined (does NOT create new array)

let names = ["dipanshu","nitin","neel","tanish"]

names.forEach(function(el){
    console.log(`Hello ${el}... How are you?`)
})
//------------------------------------
// let str =['a','b','c','d','e']
// let str1 = str.reduce(function(acc,el){
//     return acc+el
// },0)
// console.log(str1)

// // + 