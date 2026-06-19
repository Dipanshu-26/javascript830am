//<h1 id="id1" class="c1" name="nm1">Minskole</h1>
//<h2 id="id2" class="c2" name="nm1">Dipanshu Chawde</h2>
//<h3 id="id3" class="c3" name="nm3">JavaScript </h3>
//<p1 id="id4" class="c4" name="nm4">Playwright Automation</p1>

//css selector 
//<h1 id="id1" class="c1" name="nm1">Minskole</h1>

//byTag

let byTag= document.querySelector('h1')
console.log("byTag", byTag)

//by id ==> #
let byId = document.querySelector('#id1')
console.log("by id ",byId)

//by class == > .
let byClass = document.querySelector(".c1")
console.log("by class ",byClass)

//by att value
let byAtt = document.querySelector("h1[name='nm1']")
console.log("by attribute",byAtt)

//------------------------------------------------------------------------

let e1 = document.querySelector('h1')
let e2 = document.querySelector('h2[name="nm1"]')
let e3 =document.querySelector('#id3')
let e4 = document.querySelector('.c4')

console.log(e1)
console.log(e2)
console.log(e3)
console.log(e4)

e1.addEventListener('click',function(){
    e1.style.color="green"
    e1.textContent ="School of IT"
})

e2.addEventListener('click',function(){
    e2.style.color="brown"
    e2.textContent ="Neel Chawde"
}) 

e3.addEventListener('click',function(){
    e3.style.color="green"
    e3.textContent ="Python"
})

e4.addEventListener('click',function(){
    e4.style.color="blue"
    e4.textContent ="Playwright Automation with AI"
})