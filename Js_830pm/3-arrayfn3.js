//join()
//join(): converts array in string

//  "dipanshu nitin chawde"
//  "dipanshu-nitin-chawde" 

let arr = ["dipanshu","nitin","chawde"]
let q1 = arr.join("-")
console.log(q1)
console.log(arr.join("@"))

//---------------------------------------------------------
//flat()

let arr2 = [[1,2],[3,4],[5,6]]      //[1,2,3,4,5,6]

let q2 = arr2.flat()
console.log(q2)
console.log(arr2)

//---------------------------------------------------------

//indexOf()
//action=>finds index of char in array 
//retuen=> index, if not present return -1  

//           0  1   2  3  4 5  6
let nums = [ 11,22,33,44,55,66,77]

let q3 = nums.indexOf(44)
console.log(q3)

q3 = nums.indexOf(99)
console.log(q3)

//---------------------------------------------------------

// at()
// action => returns the element at the given index in an array
// return => element value, if index is invalid returns undefined

//       0  1   2  3  4 5  6   7
nums = [ 11,22,33,44,55,66,77,88]

let q4 = nums.at(5)
console.log(q4)

q4 = nums.at(9)
console.log(q4)

//---------------------------------------------------------

//slice()
// syntax => slice(startIndex,EndIndex(not included))
// action => extracts a portion of the array from startIndex to before endIndex
// return => a new array (sliced elements)    

//            0      1          2       3        4         5        6
let city = ["pune","mumbai","nashik","nagpur","mysore","kokkota","delhi"]
//            -7      -6       -5       -4      -3        -2        -1

let q5 = city.slice(1,4)               //end index not included
console.log(q5)


 q5 = city.slice(0,6)               //end index not included
console.log(q5)

 q5 = city.slice(4,1)               //end index not included
console.log(q5)

 q5 = city.slice(-6, -1)               
console.log(q5)

 q5 = city.slice(-1, -6)               
console.log(q5)

 q5 = city.slice(-6, 5)               
console.log(q5)

 q5 = city.slice(1, -2)               
console.log(q5)

// splice()
// syntax => splice(startIndex, deleteCount, item1, item2, ...)
// action => removes elements from the array starting at startIndex and optionally inserts new elements
// return => array of deleted elements (original array gets updated)

//               from where   how many              replace by 1,2,3....
//animals.splice(index,numberOfElmentstoBeDeleted,rep1,rep2)

//               0        1      2        3       4        5
let animals = ["tiger","lion","wolf",'camel',"rabbit","snake"]

// let q6 = animals.splice(1,3)

// console.log(animals)
// console.log(q6)

// animals.splice(1,3,"aa","bb","cc")
// console.log(animals)

// animals.splice(1,3,"aa","bb")
// console.log(animals)

animals.splice(1,3,"aa","bb","cc","dd","ee")
console.log(animals)

//fill()
// syntax => fill(value, startIndex?, endIndex?)  // endIndex not included
// action => fills array elements with the given value from startIndex to before endIndex
// return => updates the existing array

let num=[11,22,33,44,55,66]
num.fill("abc",2,5)
console.log(num)


// sort()
// action => sorts the array elements (alphabetically by default, ascending order)
// return => updates the existing array

let country = ["india","jbapan","srilanka","bangladesh","japan"]
console.log(country.sort())

num=[2,11,89,0,22,11,33,44,5,55,66]
console.log(num.sort())





