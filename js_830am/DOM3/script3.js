//<h1 id="id1" class="c1" name="nm1">Minskole</h1>
//<h2 id="id2" class="c2" name="nm1">Dipanshu Chawde</h2>
//<h3 id="id3" class="c3" name="nm3">JavaScript </h3>
//<p1 id="id4" class="c4" name="nm4">Playwright Automation</p1>

//css selector 
//<h1 id="id1" class="c1" name="nm1">Minskole</h1>

//byTag

let byTag= document.querySelector('h1')
console.log("byTag", byTag)

//by id
let byId = document.querySelector('#id1')
console.log("by id ",byId)

//by class 
let byClass = document.querySelector(".c1")
console.log("by class ",byClass)

//by att value
let byAtt = document.querySelector("h1[name='nm1']")
console.log("by attribute",byAtt)
