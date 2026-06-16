document.querySelector('h1').addEventListener('click',function(){
    document.querySelector('h1').style.color="red"
    //document.querySelector('h2').style.color="green"
})

document.querySelector('h2').addEventListener('click',function(){
    document.querySelector('h2').style.color="green"
    //document.querySelector('h1').style.color="red"
})


// document --- Represents the HTML page loaded in the browser.

// querySelector('h1') --- Selects the first <h1> element from the page. Returns an HTML element object.

// If HTML is: <h1>Hello</h1>

// Then querySelector('h1') points to that <h1>.

// addEventListener('click', function(){ ... }) ---
// Attaches an event listener to the <h1> element.
// Listens for a click event.
// When the <h1> is clicked, the function runs.

// function(){ ... }
// This is a callback function.
// It executes only when the click happens.

// document.querySelector('h1').style.color = "yellow"
// Selects the same <h1> again.
// Accesses its style property.
// Changes the text color to yellow.

// 🎯 What Happens When User Clicks <h1>?
// User clicks the heading
// click event is triggered
// Callback function executes
// Text color of <h1> becomes yellow


// ✔ Why function expression is used?
// Needed to delay execution until click happens.

// ✔ Why not arrow function?
// Arrow works here too, but:
// Normal function is better for understanding this in events.