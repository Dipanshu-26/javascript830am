//strings in js

let a="dipanshu"
console.log(a)
console.log(typeof(a))

a=[]
console.log(a)
console.log(typeof(a))

a=""
console.log(a)
console.log(typeof(a))

//string interpolation 
fname = "dipanshu"
lname = "chawde"
console.log(`My name is ${fname} and my surname is ${lname}`)

console.log("i am "+fname+" and my surname is "+lname+"...")

//JS ===>object
//properties ==>length, indexing
//methods ==>  slice 
//methods ==> action 
//action ==>return 


let city = "ahilyanagar"

//0     1     2    3     4     5    6      7     8     9      10
//a     h    i     l     y     a     n     a     g     a      r

console.log(city[5])

console.log(city.length)

//last element 
console.log(city.length-1)
console.log(city[city.length-1])

//---------------------------------------------
//concatinate   +

// num + num ===> num
// num + String ===>String
//strinh + num ===>string
//string + string ===>string

a=10
let b=20
let c="dip"
let d="nit"

console.log(a+b)
console.log(a+c)
console.log(c+b)
console.log(c+d)


//loops 
for(let i=0;i<city.length;i++){
    console.log(city[i])
}

let i=0
while(i<city.length){
    console.log(city[i])
    i++
}

//toUpperCase(), toLowerCase(), includes(), indexOf(), startsWith()

let str = "Dipanshu Nitin Chawde"
console.log(str.toUpperCase())
console.log(str.toLocaleLowerCase())

//includes 
console.log(str.includes("d"))
console.log(str.includes("dip"))    //false
console.log(str.includes("Dip"))
console.log(str.includes("hu Ni"))
console.log(str.includes("huNi"))    //false

//indexOf()
console.log(str.indexOf("a"))
console.log(str.indexOf("Dip"))
console.log(str.indexOf("z"))     //-1

//startsWith()
console.log(str.startsWith("D"))
console.log(str.startsWith("Dip"))
console.log(str.startsWith("d"))

//repeat
a="aditya"
console.log(a.repeat(3))
