//0     1     2    3     4     5    6      7     8     9      10
//a     h    i     l     y     a     n     a     g     a      r

let city = "ahilyanagar"
console.log(city.indexOf("a"))
console.log(city.indexOf("a",10))

console.log(city.charAt(3))
console.log(city.charAt(8))
console.log(city.charCodeAt(8))
console.log(city.charCodeAt(1))

console.log(city.lastIndexOf("a"))

let nm = "niranjan"
console.log(nm.lastIndexOf("n"))

let info = "i am learning Javascript and javascript is easy to go language.."

console.log(info.replace("javascript","python"))
console.log(info.replaceAll("javascript","python"))

let namee = "DipAnsHu"
console.log(namee.toUpperCase())
console.log(namee.toLowerCase())

let city2 = "    goa    "
console.log(city2.trimStart())
console.log(city2.trimEnd())
console.log(city2.trim())

let city3 = "wardha"
console.log(city3.padStart(8,"*"))
console.log(city3.padEnd(8,"*"))


//join , split

let str1 = "dipanshu nitin chawde"
let q1 = str1.split(" ")
console.log(q1)

let arr1 = [ 'dipanshu', 'nitin', 'chawde' ]
let q2 = arr1.join("-")
console.log(q2)

let email = "dipanshu123@gmail.com"
console.log(email.split("@")[0])


