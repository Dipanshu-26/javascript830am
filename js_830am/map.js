//js datatypes 
//number
//string 
//boolean
//arrays
//objects
//map 
//set

let a=10.5
console.log(typeof(a))

a="dipanshu"
console.log(typeof(a))

a=true
console.log(typeof(a))

a=["dipanshu",11,true]
console.log(typeof(a))

a={fn : "dipanshu", ln : "chawde"}
console.log(typeof(a))

//map 
//key , value 

let map1 = new Map([
    ["fn" , "dipanshu"],
    ["ln" , "chawde"],
    [1, "javascript"],
    [true , "hasVechicle"]
])
console.log(map1)
console.log(map1.size)
//-----------------------------------------------------
let map2 = new Map()

map2.set("fn" ,"dipanshu")
map2.set("ln" ,"chawde")
map2.set(true,"hasVechicle")
map2.set([11,22,33],"marks")
map2.set({fn : "dip"},"info")
console.log(map2)
//-----------------------------------------------------
//retrive

console.log(map2.get("fn"))
console.log(map2.get("ln"))
console.log(map2.get(true))
console.log(map2.get([11,22,33]))     //undefined
console.log(map2.get({fn : "dip"}))   //undefined

//--------------------------------------------------------
console.log(2==2)
console.log("dip" == "dip")
console.log([1,2,3] == [1,2,3])     //false
console.log({fn : "dip"} == {fn : "dip"})   //reference 
let a="dip"
let b="dip"
console.log(a==b)
a = [1,2,3]
b= [1,2,3]
console.log(a==b)
console.log(JSON.stringify(a) == JSON.stringify(a) )
//----------------------------------------------------------

let map3 = new Map([
    [1,"admin"],
    [2,"manager"],
    [3,"customer"]
])

//retrive
console.log(map3)
console.log(map3.get(1))
let q1 = map3.get(2)
console.log(q1)

//add 
map3.set(4,"trainee")
console.log(map3)

map3.set(5,"project manager")
console.log(map3)

//update
map3.set(5,"leader")
console.log(map3)

//delete
let q2 =map3.delete(4)
console.log(map3)
console.log(q2)

let q3 =map3.delete(6)
console.log(map3)
console.log(q3)

map3.set(6,"PM")
console.log(map3)

let arr= [1,2,3,4]
console.log(arr)
console.log(6 in arr)

//if any key exists? (no method to find values need to find using logic)
let q4 = map3.has(5)
console.log(q4)

q4 = map3.has(4)
console.log(q4)

//looping
for(let k of map3.keys()){
    console.log(k)
}

for(let k of map2.keys()){
    console.log(k)
}

for(let v of map3.values()){
    console.log(v)
}

for(let e of map3.entries()){
    console.log(e)
}


for(let [k,v] of map2){
    console.log(k , v )
}

map3.forEach(function(v,k){
    console.log(v,k)
})

//------------------------------------------------
let names = ["dipanshu","nitin","neel"]
let response = [
    {id :1,name : "aaa"},
    {id :2,name : "bbb"},
    {id :3,name : "ccc"},
    {id :4,name : "ddd"}
]

// 1 , "aaa" , 2 , "bbb" 3, "ccc"

let map4 = new Map()

response.forEach(function(el){
    //     k     v
    map4.set(el.id, el.name)
})
console.log(map4)

map4.clear()
console.log(map4)

//---------------------------------------------------
//Check if a value exists
let q = [...map3.values()].includes("Python");

console.log(q);

//Find the key for a value
for (let [key, value] of map3) {
    if (value === "Python") {
        console.log(key);
        break;
    }
}

//--------------------------------------------------
//get key for given value 
for (let [key, value] of map1) {
    if (value === "chawde") {
        console.log(key);
        break;
    }
}