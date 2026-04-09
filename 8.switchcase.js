//conditional operators 
//if - else , ternary op , swich case 

//one input -- multiple output 

let city = "pune"

switch (city) {
    case "pune":
        console.log("MH")
    case "delhi":
        console.log("delhi")
    case "banglore":
        console.log("KA")
    case "jaipur":
        console.log("RA")
}

//--------------------------------------------------------
console.log("----------------------")
city = "pune"

switch (city) {
    case "pune":
        console.log("MH")
        break
    case "delhi":
        console.log("delhi")
        break
    case "banglore":
        console.log("KA")
        break
    case "jaipur":
        console.log("RA")
        break
    default:
        console.log("incorrect name...")
}

console.log("----------------------")
city = "Pune"

switch (city) {
    case "pune":
    case "Pune":
        console.log("MH")
        break
    case "delhi":
    case "Delhi":    
        console.log("delhi")
        break
    case "banglore":
    case "Banglore":    
        console.log("KA")
        break
    case "jaipur":
    case "Jaipur":
        console.log("RA")
        break
    default:
        console.log("incorrect name...")
}