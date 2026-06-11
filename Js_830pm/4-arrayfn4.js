//calculate age
let byear = [1990, 1983, 2000, 2008, 2016, 2025]

let age = []
for (let i = 0; i < byear.length; i++) {
    age.push(2026 - byear[i])
}
console.log(age)

//map
// map(function(el, index, arr)
// action => performs an operation on each element of the array
// return => new array with modified values

let age2 = byear.map(function (el, index, arr) {
    return 2026 - el
})
console.log(age2)

//----------------------------------------------------------------------------

let marks = [23, 67, 89, 90, 12, 33, 99, 45]
let passM = []
for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 35) {
        passM.push(marks[i])
    }
}
console.log(passM)

let failM=[]
for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
        failM.push(marks[i])
    }
}
console.log(failM)

//filter()
// filter(function(el, index, arr)
// action => filters elements based on a condition (true/false)
// return => new array with matching elements

let passM2 = marks.filter(function(el,index,arr){
    return el>=35
})
console.log(passM2)

let failM2 = marks.filter(function(el,index,arr){    //el = 23, 67, 89, 90, 12, 33, 99, 45
    return el<35
})
console.log(failM2)

//--------------------------------------------------------------------------

let nums = [23, 67, 89, 90, 12, 33, 99, 45]
let total = 0
for(let i=0;i<nums.length;i++){
    total=total+nums[i]            //0+23, 23+67, 90+89......
}
console.log(total)

// reduce(function(acc, el, index, arr), initialValue)
// acc => accumulator (acts as a temporary variable)
// action => reduces all elements to a single value
// return => single value (number / string / object)

let total2 = nums.reduce(function(acc,el,index,arr){
    return acc+el     //0+23, 23+67, 90+89......
},0)

console.log(total2)

//----------------------------------------------------------------------
// Welcome to cityname !!!!
let city = ["pune","mumbai","delhi","kolkota","nagpur"]

for(let i=0;i<city.length;i++){
    console.log(`Welcome to ${city[i]} !!!!`)
}

// forEach(function(el, index, arr))
// action => performs an operation on each element of the array
// return => undefined (does NOT create new array)

city.forEach(function(el,index,arr){
     console.log(`Welcome to ${el} !!!!`)
})


