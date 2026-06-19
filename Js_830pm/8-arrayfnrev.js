//some(),every(),find(),finIndex()

//some() ==> true/false(if any element satisfy condn) 
//every() ==> true/false(if every element satisfy condn)
//find() ==> gives first elemet value (that satisfies cond )
//find() ==> gives first elemet index (that satisfies cond )

let arr = [78,86,90,56,45,22]

let q1 = arr.some(function(el){
    return el > 75
})
console.log(q1)

let q2 = arr.every(function(el){
    return el > 75
})
console.log(q2)

let q3 = arr.find(function(el){
    return el > 75
})
console.log(q3)

let q4 = arr.findIndex(function(el){
    return el > 750
})
console.log(q4)