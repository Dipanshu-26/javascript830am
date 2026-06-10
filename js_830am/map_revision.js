

let a= "dipanshu"
console.log(a)
console.log(typeof(a))

a=[1,2,3,4]
console.log(a)
console.log(typeof(a))

a={"name" : "dipanshu", "rno" : 44}
console.log(a)
console.log(typeof(a))

a= {1:"dip",2 : "abc"}
console.log(a)

//Map
// In JavaScript, Map is a built-in collection object that stores key-value pairs.
// Unlike a normal object ({}), a Map:
//     - allows any datatype as a key
//     - maintains insertion order
//     - provides useful methods like set(), get(), has(), and delete()

//map 
//key , value 

//define 

let map1= new Map([
    ["fn","dipanshu"],
    ["ln" , "chawde"],
    [1,"javascript"],
    [true,"hasVechile"]
])

console.log(map1)
console.log(map1.size)
//--------------------------------------------------------

let map2 = new Map()

//set

map2.set("fn","dipanshu")
map2.set("ln","chawde")
map2.set("true","hasVechile")
map2.set([11,22,33] , "marks")
map2.set({fn:"dip"},"info")

console.log(map2)

//----------------------------------------------------------

//retrive
//get

console.log(map2.get("fn"))
console.log(map2.get("ln"))
console.log(map2.get("true"))
console.log(map2.get([11,22,33]))   

//array and boject stores with reference 
//----------------------------------------------------------
console.log(2==2)
console.log("dip" == "dip")

console.log([1,2,3]==[1,2,3])
console.log({fn:"dip"}=={fn:"dip"})

let x= [1,2,3]
let y=[1,2,3]
console.log(x==y)

console.log(JSON.stringify(x) == JSON.stringify(y))

//---------------------------------------------------------
let map3 = new Map([
    [1,"admin"],
    [2,"manager"],
    [3,"customer"]
])

//retrive 
console.log(map3.get(2))
// console.log(map3.get("3"))
// console.log(map3.get(3))

//add
map3.set(4,"trainee")
console.log(map3)

//update
map3.set(2,"project manager")
console.log(map3)

//delete ==> returns true / false 
let q1 = map3.delete(4)
console.log(map3)
console.log(q1)

//----------------------------------------------
console.log("----------------------")
let arr1 = [1,2,3,4]
console.log(2 in arr1)

//has
// let map3 = new Map([
//     [1,"admin"],
//     [2,"manager"],
//     [3,"customer"]
// ])

let q2 = map3.has(3)
console.log(q2)

let q3 = map3.has(4)
console.log(q3)

//---------------------------------------
console.log(map2)
console.log(map2.has( { fn: 'dip' } ))

//-----------------------------------------
//loops 

for(let k of map3.keys()){
    console.log(k)
}

for(let v of map3.values()){
    console.log(v)
}

for(let e of map3.entries()){
    console.log(e)
}

for(let [k,v] of map3){
    console.log(k)
    console.log(v)
}

map3.forEach(function(v,k){
    // console.log(k)
    // console.log(v)
     console.log(k,v)
})

//----------------------------------------------------

let response = [
    {id :1,name : "aaa"},
    {id :2,name : "bbb"},
    {id :3,name : "ccc"},
    {id :4,name : "ddd"}
]

// 1 : "aaa",
// 2 : "bbb"

let map4 = new Map()

response.forEach(function(el){
    map4.set(el.id,el.name)
})

console.log(map4)

//--------------------------------------------
//clear()

map4.clear()
console.log(map4)