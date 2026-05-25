//oops
//class 
//prperties and methods 
//object

// class Student{
//     constructor(fn, ln,dob){
//         this.fname = fn
//         this.lname = ln
//         this.dob = dob
//     }

//     displayName(){
//         console.log(this.fname + " " + this.lname+ " " + this.dob)
//     }
// } 


// class Teacher{
//     salary = 10000
//     constructor(fn,ln,dob){
//         this.fname = fn
//         this.lname = ln
//         this.dob = dob
//     }
//     displayName(){
//         console.log(this.fname + " " + this.lname + " " + this.dob)
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// //this  ==> object ==>s1
// let s1 = new Student("ms","dhoni","01-10-2008")
// s1.displayName()

// let t1 = new Teacher("rahul" , "dravid","01-01-1999")
// t1.displayName()
// t1.displaySalary()

// let s2 = new Student("virat","koholi","01-01-2002")
// s2.displayName()

//---------------------------------------------------------------------
// “Inheritance allows one class to reuse properties and methods of another class.”
// Parent class → Student
// Child class → Teacher

//parent class
// class Student{
//     constructor(fn, ln,dob){
//         this.fname = fn
//         this.lname = ln
//         this.dob = dob
//     }

//     displayName(){
//         console.log(this.fname + " " + this.lname+ " " + this.dob)
//     }
// } 

// //child class
// class Teacher extends Student{
//     salary = 20000

//         displaySalary(){
//         console.log(this.salary)
//     }
// }

// let s3 = new Student("ms","dhoni","01-01-2008")
// s3.displayName()

// let t3 = new Teacher("rahul","dravid","01-01-1999")
// t3.displayName()
// t3.displaySalary()
//----------------------------------------------------------------------------------------

// //single inheritance , prarent and child both having constructor

// class Student {
//     constructor(fn, ln, dob) {
//         this.fname = fn
//         this.lname = ln
//         this.dob = dob
//     }

//     displayName() {
//         console.log(this.fname + " " + this.lname + " " + this.dob)
//     }
// }

// class Teacher extends Student {
//     constructor(fn, ln, dob, sal) {
//         super(fn, ln, dob)
//         this.salary = sal
//     }
//     displaySalary() {
//         console.log(this.salary)
//     }
// }

// let s1 = new Student("ms","dhoni","01-01-2008")
// s1.displayName()
// console.log(s1.fname)

// let t1 = new Teacher("rahul","dravid","01-01-1999",1500000)
// t1.displayName()
// t1.displaySalary()
// console.log(t1.fname)

//-----------------------------------------------------------------------------
////Multilevel Inheritance : Multilevel inheritance means a class is derived from another derived class.
//GrandFather → Father → Daughter

class GrandFather {
    constructor(fn, ln) {
        this.fname = fn
        this.lname = ln
    }
    displayGName() {
        console.log("Grand father name =  " + this.fname + " " + this.lname)
    }
}

class Father extends GrandFather {
    constructor(fn, ln, ffn) {
        super(fn, ln)
        this.ffname = ffn
    }
    displayFName() {
        console.log("Father name =  " + this.ffname + " " + this.lname)
    }
}

class Daughter extends Father {
    constructor(fn, ln, ffn, dfn) {
        super(fn, ln, ffn)
        this.dfname = dfn
    }
    displayDName() {
        console.log("Daughter name =  " + this.dfname + " " + this.lname)
    }
}
// console.log("-----------------------------")
// let gf = new GrandFather("gopalrao","masalkar")
// gf.displayGName()

// console.log("-----------------------------")
// let ff = new Father("gopalrao","masalkar","niranjan")
// ff.displayFName()
// ff.displayGName()

console.log("-----------------------------")

let df = new Daughter("gopalrao","masalkar","niranjan","rucha")
df.displayDName()
df.displayFName()
df.displayGName()