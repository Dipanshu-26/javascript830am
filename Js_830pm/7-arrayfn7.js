//some(),every(),findIndex(),find()

//some()
// some(function(el, index, arr)
// action => checks if at least one element satisfies the condition
// return => true if any element matches, otherwise false

let arr=[50,70,20,40,10,70,30,90]

let q1 = arr.some(function(el,inx,arr){
    return el < 4
})
console.log(q1)

// every()
// every(function(el, index, arr)
// action => checks if all elements satisfy the condition
// return => true if all elements match, otherwise false

//arr=[50,70,20,40,10,70,30,90]

let q2 = arr.every(function(el,idx,arr){
    return el>5
})

console.log(q2)

// find()
// find(function(el, index, arr)
// action => finds the first element that satisfies the condition
// return => element (if not found, returns undefined)

let q3 = arr.find(function(el){
    return el > 400
})

console.log(q3)


// findIndex()
// findIndex(function(el, index, arr)
// action => finds the index of the first element that satisfies the condition
// return => index (if not found, returns -1)

let q4 = arr.findIndex(function(el){
    return el > 70
})
console.log(q4)