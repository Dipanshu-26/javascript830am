//every , some, find , findIndex

//every

let marks =[34,56,78,99,54,23,12]
//pass 
let passM = marks.every(function(el,inx,arr){
        return el>10
})

console.log(passM)


//some 
marks =[34,56,78,99,54,23,12,101]
let pass_some = marks.some(function(el,ind,arr){
    return el >100
})
console.log(pass_some)

//find 
let arr =[10,40,70,30,40,80,90,20]
let q1 = arr.find(function(el,inx,arr){
    return el>=60
})
console.log(q1)

//findIndex

let q2 = arr.findIndex(function(el,indx,arr){
    return el>90
})
console.log(q2)
//every some 
marks =[34,56,78,99,54,23,12]
let pm = marks.every(function(el){
    return el >10
})
console.log(pm)

let sm = marks.some(function(el){
    return el >100
})
console.log(sm)