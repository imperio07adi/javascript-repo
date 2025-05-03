// Primitive 

// 7 types : String , Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 324546564655164864653n



// Reference type (Non premitive)

// Arrays, Objects, Functions

const heros = ["shaktimaan" , "naagraj" , "doga"];
let myObj = {
    name: "hitesh",
    age:22,
}

const myFunction = function(){
    // console.log("hello World");
}

// console.log(typeof id);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (premitive) , heap(non-premitive)

let myYtName = "adi.com"
let anotherName = myYtName
anotherName = "chaiaurcode"

console.log(myYtName);
console.log(anotherName);

let userOne = {
    emali: "aditya.hmain.com",
    upi: "user@ybl", 
}

let userTwo = userOne

userTwo.email = "hiteankcsd.googlle.com"

console.log(userOne.email);
console.log(userTwo.email);
