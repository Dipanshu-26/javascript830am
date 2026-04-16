//loops 

//for ,while
//for defined number of time 
//while until certin condiotion is satisfied

//for(inilization;condition;inc/dec) 

//print 0 to 10
for(let i=0;i<=10;i++){
    console.log(i)
}

//print 1 to 10

for(let x=1;x<=10;x++){
    console.log(x)
}

console.log("-----------")
//print table of 2

for(let i=2;i<=20;i=i+2){
    console.log(i)
}

console.log("-----------")
//print table of 2

for(let i=1;i<=10;i++){
    console.log(i*2)
}

console.log("-----------")
//print table of 5
for(let i=5;i<=50;i=i+5){
    console.log(i)
}

//break continue

//print 1 to 10 ==>7 exit
for(let i=1;i<=10;i++){
    if(i==7){
        break
    }
    console.log(i)
} 
console.log("-----------")
//print table of 2 ==>16 exit
for(let i=2;i<=20;i+=2){     //i+=2  ==> i=i+2
    if(i==16){
        break
    }
    console.log(i)
}

//continue
//print 1 to 10 ==>7 skip
for(let x=1;x<=10;x++){
    if(x==7){
        continue
    }
    console.log(x)
}

//print table of 2 ==>16 skip

for(let x=2;x<=20;x+=2){
    if(x==16){
        continue
    }
    console.log(x)
}
//--------------------------------------------------------
console.log("-----------")
//while 

// inilization
// while(condition)
// inc/dec    

//print 1 to 10

let a=1
while(a<=10){
    console.log(a)
    a++
}
console.log("-----------")

//table of 2
a=2
while(a<=20){
    console.log(a)
    a+=2
}

//table of 5
a=5
while(a<=50){
    console.log(a)
    a=a+5
}
console.log("-----------")
//continue and break

//print 1 to 10 ==> 7 exit
a=1
while(a<=10){
    if(a==7){
        break
    }
    console.log(a)
    a++
}

//print table of 2==> 16 exit

a=2
while(a<=20){
    if(a==16){
        break
    }
    console.log(a)
    a=a+2
}
console.log("-----------")

//continue

//print 1 to 10 ==> 7 skip

a=1
while(a<=10){            //a=1,2,3,4,5,6,7,8,9,10
    if(a==7){            //a=7
        a++            //a=8
        continue
    }
    console.log(a)        //a=1,2,3,4,5,6,8,9,10
    a++                  //a=2,3,4,5,6,7,9,10,11
}

//--------------------------------------------------------------
//print 1 to 10 in reverse 
console.log("-----------")

for(let x=10;x>=1;x--){
    console.log(x)
}

console.log("-----------")
let y=10
while(y>=1){
    console.log(y)
    y--
}

console.log("-----------")
//print table of 5 in reverse
for(let x=50;x>=5;x=x-5){
    console.log(x)
}

console.log("-----------")
y=50
while(y>=5){
    console.log(y)
    y=y-5
}