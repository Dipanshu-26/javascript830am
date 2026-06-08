//arrays 
//stor multiple values in single variable
//accessed using index value, starts with 0 
//names 

// let a="dipanshu"
// let b="neel"
// let c="nitin"

//              0           1      2        3       4
let names = ["dipanshu","neel","tanish","nitin","rajasi"]        // total elements = 5 , last index = length -1 == 4

console.log(names)

console.log(names[0])
console.log(names[1])
console.log(names[4])

console.log(names.length)

let nums = [11,22,33,44,55,66]
console.log(nums)
console.log(nums.length)
console.log(nums[2])


// in JS everting is object 
//object ==> prperties , methods 
//methods ==> action , return 

// person 
// properties ==>name , height, weight ...
// methods ==>walk() , talk(), gym()
//walk() ==> walking ==> weight loose or reached to some place 

let info = ["virat","koholi",30,10,true,22.5]
console.log(info)
console.log(info[4])

//----------------------------------------------------------------------

let nm = ["dipanshu","neel","tanish","nitin","rajasi"]     //length =5   ,4

console.log(nm[4])

//update
nm[4]="akay"
console.log(nm)

//loops 
//           5<5
for(let i=0;i<nm.length;i++){        //i=0,1,2,3,4 ,5
    console.log(nm[i])                // nm[0], nm[1],nm[2]....nm[4]
}


//while loop 

let a=0
while(a<nm.length){
    console.log(nm[a])
    a++
}

// print array in reverse

for(let i=nm.length-1;i>=0;i--){
    console.log(nm[i])
}

// print array in reverse -- while

let b=nm.length-1
while(b>=0){
    console.log(nm[b])
    b--                      //b=b-1
}