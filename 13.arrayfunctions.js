// includes(arg), indexOf(arg-el),at(arg-index), reverse(),join(arg),concat(arg), flat()

let names = ["dipanshu","nitin","chawde"]

//join()

let q1 = names.join("-")
console.log(q1)
console.log(typeof(q1))


//flat()
//action => gives the singl array from multidimentioanl array
//return=> array

let arr = [[1,['a','b']],[3,4],[5,6],[7,8]]

let q2 = arr.flat()
console.log(q2)

console.log(typeof(q2))

//console.log(arr.flat(q2))

// Here you're passing q2 (which is an array) instead of a number.

// JavaScript tries to convert that array into a number using type coercion, 
// which results in NaN, and flat(NaN) behaves like flat(0).
//So it returns the original array unchanged:

let arr2 = [ 1, [ 'a', 'b' ], 3, 4, 5, 6, 7, 8 ]
console.log(arr2.flat())

//------------------------------------------------------------------------------------

//includes(arg)
//action => checks whether the given element is present in array or not
//return => boolean

let arr3=[10,20,30,40,50,60,70]

let q3 = arr3.includes(70)
console.log(q3)

//-------------------------------------------------------------------------------------
//indexOf(arg-el)
//action => returns the index of given element
//return => index, if not present return -1  

let q4 = arr3.indexOf(40)
console.log(q4)

//-------------------------------------------------------------------------------------
// at(arg-index)
// action => returns the element at the given index in an array
// return => element value, if index is invalid returns undefined      

//     0  1  2  3  4  5  6
arr3=[10,20,30,40,50,60,70]
let q5 = arr3.at(5)
console.log(q5)

q5 = arr3.at(7)
console.log(q5)

//-------------------------------------------------------------------------------------
//              0        1       2       3         4       5       6
let fruits = ["apple","mango","grapes","banana","papaya","guava","pear"]
//               -7     -6      -5        -4       -3      -2       -1


// slice()
// syntax => slice(startIndex,EndIndex(not included))
// action => extracts a portion of the array from startIndex to before endIndex
// return => a new array (sliced elements)  

//if i want to skip first element
let a1 = fruits.slice(1)
console.log(a1)

let a2 = fruits.slice(1,6)
console.log(a2)

a2 = fruits.slice(2,4)
console.log(a2)

//              0        1       2       3         4       5       6
let fruit = ["apple","mango","grapes","banana","papaya","guava","pear"]
//               -7     -6      -5        -4       -3      -2       -1

a2 = fruit.slice(-5)
console.log(a2)

a2 = fruit.slice(-5,-1 )
console.log(a2)

a2 = fruit.slice(-5,-6 )
console.log(a2)

a2 = fruit.slice(-6, 5)
console.log(a2)

a2 = fruit.slice(1, -3)
console.log(a2)

a2 = fruit.slice(1, -7)
console.log(a2)