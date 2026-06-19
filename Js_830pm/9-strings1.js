//         0 1 2 3 4 5 6
let arr = [1,2,3,4,5,6,7]     //length = 7   last index == length-1
console.log(arr)
console.log(arr[0])

arr[0]=99
console.log(arr)

let str="dipanshu"
console.log(str)

console.log(str[0])
console.log(str[5])
console.log(str[10])

str[0] = 'x'
console.log(str)
//      01234
str = "nitin"             //length = 5   last index == length-1
console.log(str)

//-------------------------------------------
//loops
console.log(arr.length)
console.log(str.length)

//for and while
str = "niranjan"
for(let i=0;i<str.length;i++){
    console.log(str[i])
}

console.log("-------------")
for(let i=str.length-1 ;i>=0;i--){         //i=7,6,5....0,-1
    console.log(str[i])
}

console.log("-------------")
str = "tanish"
let a=0
while(a<str.length){
    console.log(str[a])
    a++
}






