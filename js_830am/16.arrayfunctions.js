//some(), every(),find(), findIndex()

// some()
// some(function(el, index, arr)
// action => checks if at least one element satisfies the condition
// return => true if any element matches, otherwise false

// some() --> boolean  -----> true or false
let arr=[10,20,30,40,50]

let q1 = arr.some(function(el,index,arr){
    return el>40
})
console.log(q1)


arr=[10,20,30,-40,-50]

q1 = arr.some(function(el,index,arr){
    return el>40
})
console.log(q1)

//------------------------------------------------------
// every()
// every(function(el, index, arr)
// action => checks if all elements satisfy the condition
// return => true if all elements match, otherwise false

arr=[10,20,30,40,50]

let q2 = arr.every(function(el,index,arr){
    return el>40
})
console.log(q2)

arr=[100,200,300,400,50]

q2 = arr.every(function(el,index,arr){
    return el > 40
})
console.log(q2)
//-------------------------------------------------------

// find()
// find(function(el, index, arr)
// action => finds the first element that satisfies the condition
// return => element (if not found, returns undefined)

let arr2 = [10,200,30,40,50,60]

let q3 = arr2.find(function(el,index,arr){
    return el>40
})

console.log(q3)

let city =['pune','mumbai','nagpur','nashik']

let q4 = city.find(function(el){
    return el == "nagpur"
})
console.log(q4)

//------------------------------------------------------------------------------
// findIndex()
// findIndex(function(el, index, arr)
// action => finds the index of the first element that satisfies the condition
// return => index (if not found, returns -1)

arr2 = [10,20,30,40,50,60]
let q5 = arr2.findIndex(function(el,index,arr){
    return el>40
})
console.log(q5)

city =['nagpur','pune','mumbai','nagpur','nashik']

let q6 = city.findIndex(function(el){
    return el == "nagpur"
})
console.log(q6)

