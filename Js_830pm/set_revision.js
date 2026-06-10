//set to store unique values 

let arr = [11,22,4,4,11,55,77,2,4,7,11]
console.log(arr)

//define set

let st1 = new Set()
console.log(st1)
console.log(typeof(st1))

//-----------------------------------------------

//add()
st1.add(11)
st1.add(22)
st1.add(33)
st1.add(11)
console.log(st1)

console.log(st1.size)

//------------------------------------------------

//has 
console.log(st1.has(11))
console.log(st1.has(44))

//--------------------
//console.log(st1[0])

//delete 
console.log(st1)
st1.delete(11)
console.log(st1)

//-----------------------------------------------------
//clear()
st1.clear()
console.log(st1)

//------------------------------------------------------
let mySet = new Set(["dip","rucha","adi","tanish"])

for(let el of mySet){
    console.log(el)
}

mySet.forEach(function(el){
    console.log(el)
})

// for(let el of mySet.entries()){
//     console.log(el)
// }

//--------------------------------------------------
//Remove duplicate from array using set -------------------------------------------
let students = ["Rahul", "Amit", "Rahul", "Neha"]

let uniqueStudents = new Set(students)

console.log(uniqueStudents)