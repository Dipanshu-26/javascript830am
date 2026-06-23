//  <h1> Student List</h1>
//     <ul>
//         <li>Dipanshu</li>
//         <li>Nitin</li>
//         <li>Tanish</li>
//         <li>Neel</li>
//     </ul>
//     <input type = "text">
//     <button>Add Me</button>

let ulList = document.querySelector('ul')
let ipBox = document.querySelector('input')
let btn = document.querySelector('button')

btn.addEventListener("click",function(){
    let new_ip = ipBox.value
    let newli = document.createElement('li')
    newli.textContent = new_ip 
    ulList.appendChild(newli)
    ipBox.value = ""
})

