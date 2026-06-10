//find age if birth year is given (map)
let birthyear = [2020,2021,2025,1983,1999,2000]
let age = []

for(let i=0;i<birthyear.length;i++){
    age.push(2026-birthyear[i])
}

console.log(age)

//find marks above 40 (filter)
let marks = [45,89,23,76,90,11,43,22,32]
let above40 = []

for(let i=0;i<marks.length;i++){
    if(marks[i]>40){
        above40.push(marks[i])
    }
}

console.log(above40)

//below 40 find

let below40 = []

for(let i=0;i<marks.length;i++){
    if(marks[i]<=40){
        below40.push(marks[i])
    }
}
console.log(below40)

//find addition of all elements of array (reduce)

let numbers = [44,6,7,22,89,11,56,89]
let total = 0
for(let i=0;i<numbers.length;i++){
    total=total+numbers[i]               //0+44 ==> 44 +6 ==>50+7 ==>57 +22.....
}
console.log(total)

//want to print welcome to cityname Welcome to Pune!!!! (forEach)

let city =['pune','mumbai','nagpur','nashik']

for(let i=0;i<city.length;i++){
    console.log(`Welcome to ${city[i]}!!!!`)
}