//arrays in js
//to store multiple values in single variable

//        0   1  2  3  4  5
let arr1=[10,11,12,13,14,15]    //lentgth=6

console.log(arr1)

console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])

let arr2 = ["dipanshu","chawde",40,32,true,[12,23]]      //last=5 length =6  
console.log(arr2)
console.log(arr2[0])
console.log(arr2[5])
console.log(arr2[5][0])

//updating the value

arr2[0]="nitin"
console.log(arr2)

arr2[6]="nitin"
console.log(arr2)

//length of array
console.log(arr2.length)

//add element at last
arr2[arr2.length]="abc"
console.log(arr2)

//------------------------------------------------------------
//looping
//for

let fruits = ["apple","mango","grapes","banana","papaya"]
for(let x=0;x<=fruits.length-1;x++){
    //console.log(x)
    console.log(fruits[x])      //fruits[0],fruits[1].....fruits[4]
}

//looping

for(let x=0;x<fruits.length;x++){
    //console.log(x)
    console.log(fruits[x])      //fruits[0],fruits[1].....fruits[4]
}
console.log("---------")
//---------------------------------------------------------------------
//while
let i=0
while(i<fruits.length){
    console.log(fruits[i])
    i++
}

//-------------------------------------------------------------------
console.log("---------")
for(let x=fruits.length-1;x>=0;x--){
    console.log(fruits[x])
}

//----------------------------------------------------------------
i=fruits.length-1
while(i>=0){
     console.log(fruits[i])
     i--
}