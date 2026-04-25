//method chaining
let str1 = "dipAnshU ChaWDe nitin tanish DIPanshu TANIsh"

//"dipanshu"

let q1 = str1.toUpperCase().toLowerCase().split(" ").some(function (el) {
    return el == "dipanshu"
})
console.log(q1)

console.log(str1.toUpperCase().toLowerCase().split(" "))

//print reverse string

let str2 = "dipanshu"

console.log(str2.split("").reverse().join(""))

//using for loop 
function revString(str) {
    let rstr = ""
    for (let i = 0; i < str.length; i++) {
        rstr = str[i] + rstr          //d  => i+d ==>p+id ==>a+ pid
    }
    return rstr
}

console.log(revString("dipanshu"))
//given string is plandrome or not     nitin 

let nm2="nitinq"
rnm2 = revString(nm2)
console.log(rnm2)
if(nm2==rnm2){
    console.log("palandrome")
}
else {
    console.log("not palandrome")
}

//vovle count "aeiouAEIOU"

let str = "dipaNShU chAwde"
let count = 0
for(let i=0;i<str.length;i++){
    if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="u" || str[i]=="A" || str[i]=="E" || str[i]=="I" || str[i]=="U" || str[i]=="o" || str[i]=="O") {
        count++
    }
}
console.log(count)

count=0
vovels = ["a","e","i","o","u"]
for(let i=0;i<str.length;i++){
    if(vovels.includes(str[i].toLowerCase())){
        count++
    }
}
console.log(count)