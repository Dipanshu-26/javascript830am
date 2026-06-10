//conditional operators 
//if - else , ternary op , swich case 

//one input -- multiple output 

// let city = "pune"

// switch (city) {
//     case "pune":
//         console.log("MH")
//     case "delhi":
//         console.log("delhi")
//     case "banglore":
//         console.log("KA")
//     case "jaipur":
//         console.log("RA")
// }

// //--------------------------------------------------------
// console.log("----------------------")
// city = "pune"

// switch (city) {
//     case "pune":
//         console.log("MH")
//         break
//     case "delhi":
//         console.log("delhi")
//         break
//     case "banglore":
//         console.log("KA")
//         break
//     case "jaipur":
//         console.log("RA")
//         break
//     default:
//         console.log("incorrect name...")
// }

// console.log("----------------------")
// city = "Pune"

// switch (city) {
//     case "pune":
//     case "Pune":
//         console.log("MH")
//         break
//     case "delhi":
//     case "Delhi":    
//         console.log("delhi")
//         break
//     case "banglore":
//     case "Banglore":    
//         console.log("KA")
//         break
//     case "jaipur":
//     case "Jaipur":
//         console.log("RA")
//         break
//     default:
//         console.log("incorrect name...")
// }

//-------------------------------------------------------------------------------------
//revision
//conditional operators 
//if - else , ternary op , swich case 

//one input -- multiple output 

let city = "mumbai"

switch(city){
    case "banglore" :
        console.log("KA")
    case "jaipur":
        console.log("RJ")
    case "Bhopal":
        console.log("MP")
    case "pune":
        console.log("MH")            
}

//break and default

city = "banglore"

switch(city){
    case "banglore" :
        console.log("KA")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "Bhopal":
        console.log("MP")
        break
    case "pune":
        console.log("MH")
        break  
    default :
        console.log("please enter valid city name...")    

}

//------------------------------------------
city = "bhopal"
switch(city){
    case "banglore":
    case "Banglore":
        console.log("KA") 
        break 
      case "jaipur":
      case "Jaipur":
        console.log("RJ")
        break
    case "bhopal":
    case "Bhopal":    
        console.log("MP")
        break
    case "pune":
    case "Pune":    
        console.log("MH")
        break  
    default :
        console.log("please enter valid city name...")        
}

//---------------------------------------------------------------
console.log("----------------------------------------")

city = "pune"
switch(city){                                    //switch(pune)
    case (city == "pune" || city == "Pune"):    //case : true
        console.log("MH")
        break

    case (city == "Bhopal" || city == "bhopal"):   //case :false
        console.log("MH")
        break 
        
     case (city == "banglore" || city ==  "Banglore"):
        console.log("KA") 
        break 

      case (city == "jaipur" || city == "Jaipur"):
        console.log("RJ")
        break  

    default :
        console.log("please enter valid city name...")    
}

console.log("----------------------------------------")

city = "jaipur"
let isFlag = true

switch(isFlag){                                   //switch(true)
    case (city == "pune" || city == "Pune"):    //case : false
        break

    case (city == "Bhopal" || city == "bhopal"):   //case :false
        console.log("MH")
        break  
        
     case (city == "banglore" || city ==  "Banglore"):   //case : false
        console.log("KA") 
        break 

      case (city == "jaipur" || city == "Jaipur"):      //case : true
        console.log("RJ")
        break

    default :
        console.log("please enter valid city name...")    
}

console.log("----------------------------------------")

//find greater number from 3 numbers

let a= 100
let b=20
let c=30

if(a>b && a>c){
    console.log("a is greater")
}    
else if(b>a && b>c){
    console.log("b is greater")
}    
else {
    console.log("c is greater")
}

//switch case
isFlag = true
switch(isFlag){
    case (a>b && a>c):
        console.log("a is greater")
        break

    case (b>a && b>c):
        console.log("b is greater")
        break 
      
    default :
        console.log("c is greter")    
}
