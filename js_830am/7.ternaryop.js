//ternary operator 
//if -else
//short hand 

//greater number

let a=100
let b=200
if(a>b){
    console.log("a is bigger")
}
else {
    console.log("b is bigger")
}
console.log("--------------------------")
//ternary operator 

//condition ? true -execute statement 1 : false  -executu statement 2
//greater number

a>b ? console.log("a is bigger") : console.log("b is bigger")


//can drive ==> age 
let age = 6

//condition ? true -execute statement 1 : false  -executu statement 2
age >=18 ? console.log("can drive") : console.log("can not drive")
//---------------------------------------------------------------------------------

//syntax
//condition ? true - execute statement1 : false -- execute statement 2

// pass or fail -- marks 
let marks = 85
if(marks>=35){
    console.log("pass")
}
else {
    console.log("fail")
}

//trenary operator
//condition ? true - execute statement1 : false -- execute statement 2
marks>=35 ? console.log("pass") : console.log("fail")

marks<35 ? console.log("fail") : console.log("pass")

console.log("---------------------------------")
//if number is positive or negative
let number = -25
number>=0 ? console.log("positive") : console.log("negative")

console.log("---------------------------------")
//if number is even or odd
let num = 672
num%2 == 0 ? console.log("even") : console.log("odd") 

console.log("---------------------------------")
//login check 
let isLogin = true
isLogin ? console.log("welcome") : console.log("please login")

console.log("---------------------------------")

//greater number from 3 numbers
let x=100
let y=20
let z=30
if(x>y && x>z){
    console.log("x is bigger")
}
else if(y>x && y>z){
    console.log("y is bigger")
}
else {
    console.log("z is bigger")
}
console.log("---------------------------------")
//condition ? true - execute statement1 : false -- execute statement 2
;(x>y && x>z) 
? console.log("x is bigger") 
: ((y>x && y>z) ? console.log("y is bigger") : console.log("z is bigger")) 


