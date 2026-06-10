// array
// push(arg), unshift(arg),pop(), shift(), includes(arg), indexOf(arg-el),at(arg-index), reverse(),join(arg),concat(arg), flat()


// push()
// action - add the element to end of array
// return - new length  of array
let numbers = [11,22,33,44,55,66,77]

let q1 = numbers.push(100)
console.log(numbers)
console.log(q1)

// unshift()
// action - add the element at 0th index of array
// return - new length  of array    
let q2 = numbers.unshift("abc")
console.log(numbers)
console.log(q2)

// pop()
// action - remove the last element
// return -- returns the same element

let arr1=['a','b','c','d','d','e']
let q3 = arr1.pop()
console.log(arr1)
console.log(q3)


//shift()
// action - remove the first element
// return -- returns the same element

let arr2=['a','b','c','d','d','e']
let q4 = arr1.shift()
console.log(arr2)
console.log(q4)