//arrays 
//store multiple values in single variable
//accessed using index value, starts with 0 
//names 

//             0           1      2         3
let names = ['dipanshu','nitin',"tanish","neel"]
console.log(names)

console.log(names[0])
console.log(names[2])

console.log(names.length)

// loops
for(let i=0; i<names.length;i++){
    console.log(names[i])
}

//while loop

let a= 0
while(a<names.length){
    console.log(names[a])
    a++
}
//--------------------------------------------------------

// in JS every thing is object 
//object ==> properties , methods 
//methods ==> action , return 

//array ==> object
// prperties , methods 
// moethod ==> pop(),push(),shift()..........

//push()
// action - add the element to end of array
// return - new length  of array
//--------------------------------------------------------
//push(),pop(),shift(),unshift(),

let nums = [11,22,33,44,55,66]

// push()
// action - add the element to end of array
// return - new length  of array
console.log(nums)
let q1 = nums.push('aa')
console.log(nums)
console.log(q1)
console.log(nums.length)

//-----------------------------------------------------------

// pop()
// action - remove the last element
// return -- returns the deleted element

let q2 = nums.pop()
console.log(nums)
console.log(q2)

//----------------------------------------------------------------
// unshift()
// action - add the element at 0th index of array
// return - new length  of array 

nums = [11,22,33,44,55,66]
let q3 = nums.unshift('aa')
console.log(nums)
console.log(q3)


//----------------------------------------------------------------
//shift()
// action - remove the first element
// return -- returns the deleted element

let q4 = nums.shift()
console.log(nums)
console.log(q4)

//----------------------------------------------------------------

//reverse()

let arr1= ['a','b','c','d','e','f']

console.log(arr1)
arr1.reverse()
console.log(arr1)

//-----------------------------------------------------------------
//concat()
// creates new array of concatination
let x = [1,2,3,4]
let y =['a','b','c']

// console.log(x)
// console.log(y)

let new_arr=x.concat(y)
console.log(new_arr)
// console.log(x)
// console.log(y)

console.log(y.concat(x))