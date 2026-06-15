// Promise.all()
// Promise.any()
// Promise.allSettled()
// Promise.race()

//promise.all()
//will execute promises till it get first reject ... 
//after getting first reject it will through shortcircut

async function PromiseAll(){
    let user = await Promise.all([
        Promise.resolve("hello1"),
        Promise.resolve("hello2"),
        Promise.reject("bye1"),
        Promise.reject("bye2")
    ])
    console.log(user)
}

//PromiseAll()

async function PromiseAny(){
    let user = await Promise.any([
        Promise.reject("bye1"),
        Promise.reject("bye2"),
        Promise.resolve("hello5"),
        Promise.resolve("hello2"),
        Promise.reject("bye1"),
        Promise.reject("bye2")
    ])
    console.log(user)
}

//PromiseAny()


async function PromiseAllSetteled(){
    let user = await Promise.allSettled([
        Promise.reject("bye1"),
        Promise.reject("bye2"),
        Promise.resolve("hello5"),
        Promise.resolve("hello2"),
        Promise.reject("bye1"),
        Promise.reject("bye2")
    ])
    console.log(user)
}

//PromiseAllSetteled()

function addTime1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello1")
        },3000)
    })
}


function addTime2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello2")
        },6000)
    })
}

async function promiseRace(){
    let user = await Promise.race([
        addTime1(),
        addTime2()
    ])
   console.log(user) 
}

promiseRace()



//promise.any()
//it will exectue till it get first resolve 

//promise.allsettled()
//it will execute all and return whatever is result in array..
//if resolve return output ..if reject return reason 

//promise.race()
//it will race betweenthe promises and returns first executed promise