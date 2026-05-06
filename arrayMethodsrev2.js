//every , some, find , findIndex

//every

let marks =[34,56,78,99,54,23,12]
//pass 
let passM = marks.every(function(el,inx,arr){
        return el>10
})

console.log(passM)


//some 
marks =[34,56,78,99,54,23,12,101]
let pass_some = marks.some(function(el,ind,arr){
    return el >100
})
console.log(pass_some)

//find 
let arr =[10,40,70,30,40,80,90,20]
let q1 = arr.find(function(el,inx,arr){
    return el>=40
})
console.log(q1)

//findIndex

let q2 = arr.findIndex(function(el,indx,arr){
    return el>90
})
console.log(q2)
//every some 
marks =[34,56,78,99,54,23,12]
let pm = marks.every(function(el){
    return el >10
})
console.log(pm)

let sm = marks.some(function(el){
    return el >100
})
console.log(sm)


// reduce(function(acc, el, index, arr), initialValue)
// acc => accumulator (acts as a temporary variable)
// action => reduces all elements to a single value
// return => single value (number / string / object)


// forEach(function(el, index, arr))
// action => performs an operation on each element of the array
// return => undefined (does NOT create new array)

// some()
// some(function(el, index, arr)
// action => checks if at least one element satisfies the condition
// return => true if any element matches, otherwise false


// every()
// every(function(el, index, arr)
// action => checks if all elements satisfy the condition
// return => true if all elements match, otherwise false

// find()
// find(function(el, index, arr)
// action => finds the first element that satisfies the condition
// return => element (if not found, returns undefined)

// findIndex()
// findIndex(function(el, index, arr)
// action => finds the index of the first element that satisfies the condition
// return => index (if not found, returns -1)

// filter(function(el, index, arr)
// action => filters elements based on a condition (true/false)
// return => new array with matching elements

// map(function(el, index, arr)
// action =>
//  performs an operation on each element of the array
// return => new array with modified values