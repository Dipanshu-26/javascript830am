//<h1 id="id1" class="c1" name="nm1">Minskol</h1>

let byTag = document.querySelector('h1')
console.log(byTag)

let byId = document.querySelector('#id1')
console.log(byId)

let byClass = document.querySelector('.c1')
console.log(byClass)

let byAtt = document.querySelector('h1[name="nm1"]')
console.log(byAtt)

//-----------------------------------------------------------------
//  <h1 id="id1" class="c1" name="nm1">Minskole</h1>
//     <h2 id="id2" class="c2" name="nm1">Dipanshu Chawde</h2>
//     <h3 id="id3" class="c3" name="nm3">JavaScript </h3>
//     <p1 id="id4" class="c4" name="nm4">Playwright Automation</p1>


let e1 = document.querySelector('h1')
let e2 = document.querySelector('#id2')
let e3 = document.querySelector('.c1')
let e4 = document.querySelector('[name="nm4"]')

// e1.addEventListener('click',function(){
//     e1.style.color='yellow'
//     e1.textContent = "School of IT"
// }) 

// e2.addEventListener('click',function(){
//     e2.style.color='green'
//     e2.textContent = "Neel Chawde"
// })


//-----------------------------------------------------
let b1 = document.querySelector('#b1')
console.log(b1)

b1.addEventListener('click',function(){
    e1.style.color='yellow'
    e1.textContent = "School of IT"    
})

let b2 = document.querySelector('#b2')
console.log(b2)

b2.addEventListener('click',function(){
    e2.style.color='green'
    e2.textContent = "Neel Chawde"
})