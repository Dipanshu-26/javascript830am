let e1 = document.querySelector('h1')
let e2 = document.querySelector('#id1')
let e3 = document.querySelector('[name="plc"]')

let b1 = document.querySelector('button[id="b1"]')
let b2 =document.querySelector('button[id="b2"]')
let b3 =document.querySelector('button[id="b3"]')

b1.addEventListener('click',function(){
    e1.textContent = "Red"
    e1.style.color="red"
})

b2.addEventListener('click',function(){
    e2.textContent = "Dipanshu"
    e2.style.color="blue"
})

b3.addEventListener('click',function(){
    e3.textContent = "Rome"
    e3.style.color="brown"
})