//Truthy and falsy values

//Falsy values : 0,undefined, null,Nan, ""
//Truthy values : any value other than falsy(example 3>2)

//0 -- falsy
if(0){        //if returns false 
    console.log("hello")
}
else{
    console.log("bye")
}

//-------------------------------------------
//undefined --falsey

if(undefined){        //if returns false 
    console.log("hello")
}
else{
    console.log("bye")
}

//-------------------------------------------
let x=undefined
if(x){
    console.log("hello")
}
else{
    console.log("bye")
}

//-------------------------------------------
x=2
if(x){
    console.log("hello")
}
else{
    console.log("bye")
}
//-------------------------------------------
//NaN

if(NaN){
    console.log("hello")
}
else{
    console.log("bye")
}
//-------------------------------------------
let y = NaN
if(y==NaN){
    console.log("equal")
}
else{
    console.log("not equal")
}
//NaN not a number NaNis not equal to anything not even itself
//-------------------------------------------
//want to check if value id NaN
x=NaN
if(isNaN(x)){
    console.log("x is NaN")
}
else{
    console.log("x is not NaN")
}
//-------------------------------------------
//"" -- falsy

if(""){
    console.log("truthy")
}
else{
    console.log("falsy")
}

//-------------------------------------------
//"" -- falsy

if(" "){
    console.log("truthy")
}
else{
    console.log("falsy")
}
//-------------------------------------------
x=""
if(x==""){
    console.log("truthy")
}
else{
    console.log("falsy")
}
//-------------------------------------------
x=""
if(x){
    console.log("truthy")
}
else{
    console.log("falsy")
}
//-------------------------------------------
if(2){
    console.log("truthy")
}
else{
    console.log("falsy")
}

//-------------------------------------------
if(2>6){
    console.log("truthy")
}
else{
    console.log("falsy")
}

//-------------------------------------------
if([]){
    console.log("truthy")
}
else{
    console.log("falsy")
}

//-------------------------------------------
if({}){
    console.log("truthy")
}
else{
    console.log("falsy")
}
//-------------------------------------------
if("dipanshu"){
    console.log("truthy")
}
else{
    console.log("falsy")
}