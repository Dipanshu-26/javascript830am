let ulList = document.querySelector('ul')
let ipBox = document.querySelector('input')
let btn = document.querySelector('button#id1')

//step1 : function to add li element
btn.addEventListener("click",function(){
    let new_ip = ipBox.value
    let newli = document.createElement('li')
    newli.textContent = new_ip 
    createButton(newli)
    ulList.appendChild(newli)
    ipBox.value = ""
})


//step 2 : function to add buttons
{/* <button class="rm" >Remove</button>
<button class="up" >Up</button>
<button class="dn" >Down</button> */}

function createButton(li){
    let rbtn = document.createElement('button')
    rbtn.textContent ="Remove"
    rbtn.classList.add('rm')
    li.appendChild(rbtn)

    let ubtn = document.createElement('button')
    ubtn.textContent ="Up"
    ubtn.classList.add('up')
    li.appendChild(ubtn)

    let dbtn = document.createElement('button')
    dbtn.textContent ="Down"
    dbtn.classList.add('dn')
    li.appendChild(dbtn)    
}

//step 3 : add functionality to buttons